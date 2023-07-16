<template>
  <PageWrapper>
    <PanelFilterItems
      v-if="hasProjects"
      :sortFieldOptions="sortFieldOptions"
      :sortField="sortField"
      :sortOrder="sortType"
      :search="search"
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

    <Pagination
      v-if="totalPages > 1 && !isLoading && !isError"
      :currentPage="Number(currentPage)"
      :totalPages="totalPages"
      @onPageChange="handlePageChange"
    ></Pagination>
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
import Pagination from "@/components/pagination/Pagination.vue";

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
    Pagination,
  },

  data() {
    return {
      hasProjects: false,
      projects: [],
      isLoading: true,
      isError: false,
      totalPages: 1,

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

  computed: {
    // filters
    query() {
      return this.$route.query;
    },
    sortField() {
      return this.query.sortField || "dateCreated";
    },
    sortType() {
      return this.query.sortType || "desc";
    },
    search() {
      return this.query.search || undefined;
    },
    currentPage() {
      return this.query.currentPage || 1;
    },
  },

  methods: {
    handleSearchChange(value) {
      this.$router.push({ query: { ...this.query, search: value || undefined } });
      this.loadProjectsWithDebounce();
    },

    handleSortFieldChange(value) {
      this.$router.push({ query: { ...this.query, sortField: value } });

      this.loadProjects();
    },

    handleOrderChange(value) {
      this.$router.push({ query: { ...this.query, sortType: value } });

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
        query: { projectId: value._id },
      });
    },

    handlePageChange(value) {
      this.$router.push({ query: { ...this.query, currentPage: value } });
      this.loadProjects();
    },

    async checkExistsProjects() {
      this.isLoading = true;

      try {
        const response = await axios.post(`${BASE_API_URL}/projects/search`, {
          page: 1,
          limit: 1,
        });
        const projects = response.data.projects;
        if (projects.length) {
          this.hasProjects = true;
        }
      } catch (error) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },

    async loadProjects() {
      this.isLoading = true;
      this.projects = [];

      try {
        const projectsResponse = await axios.post(`${BASE_API_URL}/projects/search`, {
          page: this.currentPage,
          limit: 100,
          filter: {
            name: this.search,
          },
          sort: {
            field: this.sortField,
            type: this.sortType,
          },
        });

        this.totalPages = projectsResponse.data.total;

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
    console.log("route", this.$route);
    console.log("route.query", this.$route.query);

    await this.checkExistsProjects();
    await this.loadProjects();
  },
};
</script>
