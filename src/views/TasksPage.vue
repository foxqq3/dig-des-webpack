<template>
  <div class="page__content">
    <PanelFilterWorkItems
      v-if="onLoadHastasks"
      :selectOptions="selectOptions"
      :selectDefaultValue="selectDefaultValue"
      hasAdditionalFilters
      @onSearchChange="handleSearchChange"
      @onSelectChange="handleSelectChange"
      @onClickOrder="handleOrderChange"
    />

    <ListWorkItems v-if="tasks.length && !isLoading && !isError" :dataWorkItems="tasks" />

    <VPlug
      v-if="!tasks.length && !isLoading && !isError && !onLoadHastasks"
      titleText="Не создан ни одна задача"
      hasButton
    />

    <VPlug
      v-if="!tasks.length && !isLoading && !isError && onLoadHastasks"
      titleText="Ни одина задача не соответствует результатам поиска/фильтрации"
    />

    <VSvgIcon v-if="!isLoading && isError" name="preloader" width="40px" height="40px" />
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

export default {
  name: "TasksPage",

  components: {
    PanelFilterWorkItems,
    ListWorkItems,
    VPlug,
    VSvgIcon,
  },

  data() {
    return {
      onLoadHastasks: false,
      tasks: [],
      search: "",
      isLoading: true,
      isError: false,
      sort: {
        field: "",
        type: "",
      },

      selectDefaultValue: "dateCreated",

      selectOptions: [
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
    };
  },

  methods: {
    handleSearchChange(value) {
      this.search = value;
      this.loadtasksWithDebounce();
    },

    handleSelectChange(value) {
      this.sort.field = value;
      this.loadtasks();
    },

    handleOrderChange(value) {
      this.sort.type = value;
      this.loadtasks();
    },

    async loadtasks() {
      this.loading = true;
      try {
        const tasksResponse = await axios.post(`${BASE_API_URL}/tasks/search`, {
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

        const tasks = tasksResponse.data.tasks;

        if (!tasks.length) return (this.tasks = []);

        const authorsIds = tasks.reduce((acc, project) => {
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

        this.tasks = tasks.map((project) => ({
          ...project,
          author: project.author ? usersAsObject[project.author] : null,
          authorEdited: project.authorEdited ? usersAsObject[project.authorEdited] : null,
          search: this.search,
        }));

        const projetctsIds = await axios.post

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
    this.loadtasksWithDebounce = debounce(function () {
      this.loadtasks();
    }, 500);
  },

  async mounted() {
    const data = await this.loadtasks();

    if (this.tasks.length) {
      this.onLoadHastasks = true;
    }
  },
};
</script>
