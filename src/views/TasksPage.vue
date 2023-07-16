<template>
  <PageWrapper class="">
    <PanelFilterItems
      hasAdditionalFilters
      :sortFieldOptions="sortFieldOptions"
      :sortField="sort.field"
      :sortOrder="sort.type"
      @onSearchChange="handleSearchChange"
      @onOrderChange="handleOrderChange"
      @onSortFieldChange="handleSortFieldChange"
      @onAddButtonClick="handleAddButtonClick"
    />
    {{ filter }}

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

export default {
  name: "TasksPage",

  components: {
    PageWrapper,
    PanelFilterItems,
    ListWorkItems,
    VPlug,
    VSvgIcon,
    Preloader,
  },

  props: {
    initialIdProject: {
      type: String,
      default: undefined,
    },
    initialIdUser: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    ...mapState(["user"]),
  },

  data() {
    return {
      tasks: [],
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

      isDeletePopupOpen: false,
      filter: "",
    };
  },

  methods: {
    handleSearchChange(value) {
      this.search = value;
      this.loadTasksWithDebounce();
    },

    handleOrderChange(value) {
      this.sort.type = value;
      this.loadTasks();
    },

    handleSortFieldChange(value) {
      this.sort.field = value;
      this.loadTasks();
    },

    handleAddButtonClick() {
      alert("Создание задачи");
      this.$router.push({ name: "tasks-page-create"});
    },

    handleEditTaskClick(value) {
      alert(`Редактирование задачи ${value}`);
    },

    handleDeleteTaskClick(value) {
      alert(`Удаление задачи ${value}`);
    },

    handleNameTaskClick() {
      alert("Клик по задаче");
    },

    async loadTasks() {
      this.isLoading = true;
      this.tasks = [];

      try {
        const tasksResponse = await axios.post(`${BASE_API_URL}/tasks/search`, {
          page: 1,
          limit: 10,
          filter: {
            projectId: this.filter.projectId || undefined,
            author: this.filter.author || undefined,
            executor: this.filter.executor || undefined,
            name: this.search || undefined,
          },
          sort: {
            field: this.sort.field || undefined,
            type: this.sort.type || undefined,
          },
        });

        const tasks = tasksResponse.data.tasks;

        if (!tasks.length) return;

        console.log(tasks);

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
        console.log(this.tasks);
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

    // if (!this.initialIdUser && !this.initialIdProject) {
    //   this.filter = {
    //     executor: this.user,
    //   };
    // }

    this.loadTasks();
  },
};
</script>
