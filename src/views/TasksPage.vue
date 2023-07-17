<template>
  <PageWrapper>
    <PanelFilterItems
      :sortFieldOptions="sortFieldOptions"
      :sortField="sortField"
      :sortOrder="sortType"
      @onSearchChange="handleSearchChange"
      @onOrderChange="handleOrderChange"
      @onSortFieldChange="handleSortFieldChange"
      @onAddButtonClick="handleAddButtonClick"
    />

    <ListWorkItems
      v-if="tasks.length && !isLoading && !isError"
      :dataWorkItems="tasks"
      @onNameClick="handleNameTaskClick"
      @onEditClick="handleEditTaskClick"
      @onDeleteClick="handleDeleteTaskClick"
    />

    <Preloader v-if="isLoading" />

    <VPlug
      v-if="!tasks.length && !isLoading && !isError"
      titleText="Ни одна задача соответствует результатам поиска/фильтрации"
    />

    <Pagination
      v-if="totalPages > 1 && !isLoading && !isError"
      :currentPage="Number(currentPage)"
      :totalPages="totalPages"
      @onPageChange="handlePageChange"
    ></Pagination>

    <WorkItemDeletePopup
      v-if="isDeletePopupOpen"
      :initialData="initialDataProject"
      itemName="задачу"
      itemsUrl="tasks"
      @onClose="handleDeletePopupClose"
      @onDeleted="handleDeletePopupDeleted"
    />
  </PageWrapper>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";
import { mapState } from "vuex";
import { debounce } from "@/helper";

import PageWrapper from "@/components/wrappers/page-wrapper/PageWrapper.vue";
import PanelFilterItems from "@/components/panel-filter-items/PanelFilterItems.vue";
import ListWorkItems from "@/components/list-work-items/ListWorkItems.vue";
import VPlug from "@/components/v-plug/VPlug.vue";
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";
import Preloader from "@/components/preloader/Preloader.vue";
import Pagination from "@/components/pagination/Pagination.vue";
import WorkItemDeletePopup from "@/components/popups/work-item-delete-popup/WorkItemDeletePopup.vue";

export default {
  name: "TasksPage",

  components: {
    PageWrapper,
    PanelFilterItems,
    ListWorkItems,
    VPlug,
    VSvgIcon,
    Preloader,
    Pagination,
    WorkItemDeletePopup,
  },

  data() {
    return {
      tasks: [],
      isLoading: true,
      isError: false,

      sortFieldOptions: [
        {
          value: "name",
          name: "По названию",
        },
        {
          value: "status",
          name: "По статусу",
        },
        {
          value: "author",
          name: "По автору",
        },
        {
          value: "executor",
          name: "По исполнителю",
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

      filter: "",
      totalPages: 1,

      initialDataProject: "",
      isDeletePopupOpen: false,
    };
  },

  computed: {
    ...mapState(["user"]),

    // Dynamic page filters
    query() {
      return this.$route.query;
    },
    projectId() {
      return this.query.projectId || undefined;
    },
    authorId() {
      return this.query.authorId || undefined;
    },
    executorId() {
      return this.query.executorId || undefined;
    },
    currentPage() {
      return this.query.currentPage || 1;
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
  },

  methods: {
    handleSearchChange(value) {
      this.$router.push({ query: { ...this.query, search: value || undefined } });
      this.loadTasksWithDebounce();
    },

    handleOrderChange(value) {
      this.$router.push({ query: { ...this.query, sortType: value } });
      this.loadTasks();
    },

    handleSortFieldChange(value) {
      this.$router.push({ query: { ...this.query, sortField: value } });
      this.loadTasks();
    },

    handleAddButtonClick() {
      this.$router.push({ name: "tasks-page-create" });
    },

    handleEditTaskClick(value) {
      alert(`Редактирование задачи ${value}`);
      this.$router.push({
        name: "tasks-page-edit",
        params: { id: value._id, info: value },
      });
    },

    handleDeleteTaskClick(value) {
      this.isDeletePopupOpen = true;
      this.initialDataProject = { ...value };
    },

    handleDeletePopupDeleted() {
      this.isDeletePopupOpen = false;
      this.initialDataProject = "";
      this.loadTasks();
    },

    handleDeletePopupClose() {
      this.isDeletePopupOpen = false;
      this.initialDataProject = "";
    },

    handleNameTaskClick() {
      alert("Клик по задаче");
    },

    handlePageChange(value) {
      this.$router.push({ query: { ...this.query, currentPage: value } });
      this.loadTasks();
    },

    async loadTasks() {
      this.isLoading = true;
      this.tasks = [];

      try {
        const tasksResponse = await axios.post(`${BASE_API_URL}/tasks/search`, {
          page: this.currentPage,
          limit: 10,
          filter: {
            projectId: this.projectId,
            author: this.authorId,
            executor: this.executorId,
            name: this.search,
          },
          sort: {
            field: this.sortField,
            type: this.sortType,
          },
        });

        this.totalPages = tasksResponse.data.total;
        const tasks = tasksResponse.data.tasks;

        if (!tasks.length) return;

        const usersIds = tasks.reduce((acc, task) => {
          const authorId = task.author;
          const authorEditedId = task.authorEdited;
          const executorId = task.executor;

          if (authorId && !acc.includes(authorId)) acc.push(authorId);
          if (authorEditedId && !acc.includes(authorEditedId)) acc.push(authorEditedId);
          if (executorId && !acc.includes(executorId)) acc.push(executorId);

          return acc;
        }, []);

        const usersResponse = await axios.post(`${BASE_API_URL}/users/search`, {
          filter: {
            page: 1,
            limit: 30,
            _id: usersIds,
          },
        });

        const usersAsObject = usersResponse.data.users.reduce(
          (acc, user) => ({
            ...acc,
            [user._id]: user,
          }),
          {}
        );

        const projectsIds = tasks.reduce((acc, task) => {
          const projectId = task.projectId;

          if (projectId && !acc.includes(projectId)) acc.push(projectId);
          return acc;
        }, []);

        const projectsResponse = await axios.post(`${BASE_API_URL}/projects/search`, {
          filter: {
            page: 1,
            limit: 10,
            _id: projectsIds,
          },
        });

        const projectsAsObject = projectsResponse.data.projects.reduce(
          (acc, project) => ({
            ...acc,
            [project._id]: project,
          }),
          {}
        );

        this.tasks = tasks.map((task) => ({
          ...task,
          author: task.author ? usersAsObject[task.author] : null,
          authorEdited: task.authorEdited ? usersAsObject[task.authorEdited] : null,
          executor: task.executor ? usersAsObject[task.executor] : null,
          project: task.projectId ? projectsAsObject[task.projectId] : null,
          search: this.search,
        }));
      } catch (error) {
        this.isError = true;
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  created() {
    this.loadTasksWithDebounce = debounce(function () {
      this.loadTasks();
    }, 500);
  },

  mounted() {
    if (this.initialIdProject) {
      this.filter = {
        projectId: this.initialIdProject,
      };
    }
    this.loadTasks();
  },
};
</script>
