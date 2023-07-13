<template>
  <div class="page__content">
    <PanelFilterWorkItems
      v-if="onLoadHasProjects"
      :selectOptions="selectOptions"
      selectDefaultValue="dateCreated"
      @onSearchChange="handleSearchChange"
      @onSelectChange="handleSelectChange"
      @onClickOrder="handleOrderChange"
    />

    <ListWorkItems
      v-if="projects.length && !isLoading && !isError"
      :dataWorkItems="projects"
    />

    <VPlug
      v-if="!projects.length && !isLoading && !isError && !onLoadHasProjects"
      titleText="Не создан ни один проект"
      hasButton
    />

    <VPlug
      v-if="!projects.length && !isLoading && !isError && onLoadHasProjects"
      titleText="Ни один проект не соответствует результатам поиска"
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
  name: "ProjectsPage",

  components: {
    PanelFilterWorkItems,
    ListWorkItems,
    VPlug,
    VSvgIcon,
  },

  data() {
    return {
      onLoadHasProjects: false,
      projects: [],
      search: "",
      isLoading: true,
      isError: false,
      sort: {
        field: "",
        type: "",
      },

      selectOptions: [
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
    };
  },

  methods: {
    handleSearchChange(value) {
      this.search = value;
      this.loadProjectsWithDebounce();
    },

    handleSelectChange(value) {
      this.sort.field = value;
      this.loadProjects();
    },

    handleOrderChange(value) {
      this.sort.type = value;
      this.loadProjects();
    },

    async loadProjects() {
      this.loading = true;
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

        if (!projects.length) return (this.projects = []);

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
    const data = await this.loadProjects();

    if (this.projects.length) {
      this.onLoadHasProjects = true;
    }
  },
};
</script>
