<template>
  <PageWrapper class="page__content">
    <PanelFilterItems
      v-if="hasProjects"
      :sortFieldOptions="sortFieldOptions"
      :sortField="sort.field"
      :sortOrder="sort.type"
      @onSearchChange="handleSearchChange"
      @onOrderChange="handleOrderChange"
      @onSortFieldChange="handleSortFieldChange"
      @onAddButtonClick="handleAddButtonClick"
    />

    <ListWorkItems
      v-if="projects.length && !isLoading && !isError"
      :dataWorkItems="projects"
      @onNameClick="handleNameProjectClick"
      @onEditClick="handleEditProjectClick"
      @onDeleteClick="handleDeleteProjectClick"
    />

    <VPlug
      v-if="!projects.length && !isLoading && !isError && !hasProjects"
      titleText="Не создан ни один проект"
      hasButton
    />

    <VPlug
      v-if="!projects.length && !isLoading && !isError && hasProjects"
      titleText="Ни один проект не соответствует результатам поиска"
    />

    <Preloader v-if="isLoading" />

    <ProjectCreatePopup
      v-if="isCreatePopupOpen"
      @onClose="handleCreatePopupClose"
      @onCreated="handleCreatePopupCreated"
    />

    <ProjectDeletePopup
      v-if="isDeletePopupOpen"
      :initialData="initialDataProject"
      @onClose="handleDeletePopupClose"
      @onDeleted="handleDeletePopupDeleted"
    />

    <ProjectEditPopup
      v-if="isEditPopupOpen"
      :initialData="initialDataProject"
      @onClose="handleEditPopupClose"
      @onEdited="handleEditPopupEdited"
    />
  </PageWrapper>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";
import { debounce } from "@/helper";

import PageWrapper from "@/components/wrappers/page-wrapper/PageWrapper.vue";
import PanelFilterItems from "@/components/panel-filter-items/PanelFilterItems.vue";
import ListWorkItems from "@/components/list-work-items/ListWorkItems.vue";
import VPlug from "@/components/v-plug/VPlug.vue";
import ProjectCreatePopup from "@/components/popups/project-create-popup/ProjectCreatePopup.vue";
import ProjectDeletePopup from "@/components/popups/project-delete-popup/ProjectDeletePopup.vue";
import ProjectEditPopup from "@/components/popups/project-edit-popup/ProjectEditPopup.vue";
import Preloader from "@/components/preloader/Preloader.vue";

export default {
  name: "ProjectsPage",

  components: {
    PageWrapper,
    ProjectCreatePopup,
    ProjectDeletePopup,
    ProjectEditPopup,
    PanelFilterItems,
    ListWorkItems,
    VPlug,
    Preloader,
  },

  data() {
    return {
      hasProjects: false,
      projects: [],
      search: "",
      isLoading: true,
      isError: false,
      sort: {
        field: "dateCreated",
        type: "desc",
      },

      sortFieldOptions: [
        {
          value: "name",
          name: "По названию",
        },
        {
          value: "author",
          name: "По автору",
        },
        {
          value: "dateCreated",
          name: "По дате создания",
        },
        {
          value: "dateEdited",
          name: "По дате обновления",
        },
      ],

      isCreatePopupOpen: false,
      isEditPopupOpen: false,
      isDeletePopupOpen: false,

      initialDataProject: "",
    };
  },

  methods: {
    handleSearchChange(value) {
      this.search = value;
      this.loadProjectsWithDebounce();
    },

    handleSortFieldChange(value) {
      this.sort.field = value;
      this.loadProjects();
    },

    handleOrderChange(value) {
      this.sort.type = value;
      this.loadProjects();
    },

    handleAddButtonClick() {
      this.isCreatePopupOpen = true;
    },

    handleCreatePopupClose() {
      this.isCreatePopupOpen = false;
    },

    handleCreatePopupCreated() {
      this.isCreatePopupOpen = false;
      this.loadProjects();
    },

    handleDeleteProjectClick(value) {
      this.isDeletePopupOpen = true;
      this.initialDataProject = { ...value };
    },

    handleDeletePopupDeleted() {
      this.isDeletePopupOpen = false;
      this.initialDataProject = "";
      this.loadProjects();
    },

    handleDeletePopupClose() {
      this.isDeletePopupOpen = false;
      this.initialDataProject = "";
    },

    handleEditProjectClick(value) {
      this.isEditPopupOpen = true;
      this.initialDataProject = { ...value };
    },

    handleEditPopupEdited() {
      this.isEditPopupOpen = false;
      this.initialDataProject = "";
      this.loadProjects();
    },

    handleEditPopupClose() {
      this.isEditPopupOpen = false;
      this.initialDataProject = "";
    },

    handleNameProjectClick(value) {
      this.$router.push({
        name: "tasks-page",
        params: { initialIdProject: value._id },
      });
    },

    async loadProjects() {
      this.isLoading = true;
      this.projects = [];

      try {
        const projectsResponse = await axios.post(`${BASE_API_URL}/projects/search`, {
          page: 1,
          limit: 10,
          filter: {
            name: this.search || undefined,
          },
          sort: {
            field: this.sort.field || undefined,
            type: this.sort.type || undefined,
          },
        });

        const projects = projectsResponse.data.projects;

        if (!projects.length) return;

        const authorsIds = projects.reduce((acc, project) => {
          const authorId = project.author;
          const authorEditedId = project.authorEdited;

          if (authorId && !acc.includes(authorId)) acc.push(authorId);
          if (authorEditedId && !acc.includes(authorEditedId)) acc.push(authorEditedId);

          return acc;
        }, []);

        const usersResponse = await axios.post(`${BASE_API_URL}/users/search`, {
          filter: {
            page: 1,
            limit: 20,
            _id: authorsIds,
          },
        });

        const usersAsObject = usersResponse.data.users.reduce(
          (acc, user) => ({
            ...acc,
            [user._id]: user,
          }),
          {}
        );

        this.projects = projects.map((project) => ({
          ...project,
          author: project.author ? usersAsObject[project.author] : null,
          authorEdited: project.authorEdited ? usersAsObject[project.authorEdited] : null,
          search: this.search,
        }));
      } catch (error) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },

  created() {
    this.loadProjectsWithDebounce = debounce(function () {
      this.loadProjects();
    }, 500);
  },

  async mounted() {
    await this.loadProjects();

    if (this.projects.length) {
      this.hasProjects = true;
    }
  },
};
</script>
