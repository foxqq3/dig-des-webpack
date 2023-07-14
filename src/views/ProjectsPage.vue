<template>
  <div class="page__content">
    <PanelFilterWorkItems
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

    <div
      v-if="isLoading"
      style="
        display: flex;
        width: 100%;
        height: 100px;
        justify-content: center;
        align-items: center;
      "
    >
      <VSvgIcon name="preloader" width="40px" height="40px" />
    </div>

    <ProjectCreatePopup
      v-if="isCreatePopupOpen"
      @onClose="handleCreatePopupClose"
      @onCreated="handleCreatePopupCreated"
    />

    <ProjectDeletePopup
      v-if="isDeletePopupOpen"
      :id="selectedProjectId"
      :name="selectedProjectName"
      @onClose="handleDeletePopupClose"
      @onDeleted="handleDeletePopupDeleted"
    />

    <ProjectEditPopup
      v-if="isEditPopupOpen"
      :getId="selectedProjectId"
      :getName="selectedProjectName"
      :getCode="selectedProjectCode"
      @onClose="handleEditPopupClose"
      @onEdited="handleEditPopupEdited"
    />
  </div>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";
import { debounce } from "@/helper";

import PanelFilterWorkItems from "@/components/panel-filter-work-items/PanelFilterWorkItems.vue";
import ListWorkItems from "@/components/list-work-items/ListWorkItems.vue";
import VPlug from "@/components/v-plug/VPlug.vue";
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";
import ProjectCreatePopup from "@/components/popups/project-create-popup/ProjectCreatePopup.vue";
import ProjectDeletePopup from "@/components/popups/project-delete-popup/ProjectDeletePopup.vue";
import ProjectEditPopup from "@/components/popups/project-edit-popup/ProjectEditPopup.vue";

export default {
  name: "ProjectsPage",

  components: {
    ProjectCreatePopup,
    ProjectDeletePopup,
    ProjectEditPopup,
    PanelFilterWorkItems,
    ListWorkItems,
    VPlug,
    VSvgIcon,
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

      selectedProjectName: "",
      selectedProjectId: "",
      selectedProjectCode: "",
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

    handleNameProjectClick(value) {
      console.log(value);
    },

    handleDeleteProjectClick(value) {
      this.isDeletePopupOpen = true;
      this.selectedProjectId = value.id;
      this.selectedProjectName = value.name;
    },

    handleDeletePopupDeleted() {
      this.isDeletePopupOpen = false;
      this.selectedProjectId = "";
      this.selectedProjectName = "";
      this.loadProjects();
    },

    handleDeletePopupClose() {
      this.isDeletePopupOpen = false;
      this.selectedProjectId = "";
      this.selectedProjectName = "";
    },

    handleEditProjectClick(value) {
      this.isEditPopupOpen = true;
      this.selectedProjectId = value.id;
      this.selectedProjectName = value.name;
      this.selectedProjectCode = value.code;
      console.log("редактор");
    },

    handleEditPopupEdited() {
      this.isEditPopupOpen = false;
      this.selectedProjectId = "";
      this.selectedProjectName = "";
      this.selectedProjectCode = "";
      this.loadProjects();
    },

    handleEditPopupClose() {
      this.isEditPopupOpen = false;
      this.selectedProjectId = "";
      this.selectedProjectName = "";
      this.selectedProjectCode = "";
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

        console.log(this.projects);
      } catch (error) {
        this.isError = true;
        console.log(error);
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
