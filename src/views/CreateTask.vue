<template>
  <PageWrapper>
    <EditOrCreateSample>
      <template v-slot:header>
        <h1>Создание задачи</h1>
      </template>

      <template v-slot:body-form>
        <div class="create-task__field">
          <label for="" class="create-task__label">
            <span>Название</span> <span class="font_error">*</span></label
          >
          <VInput />
        </div>
        <div class="create-task__field">
          <label for="" class="create-task__label"> <span>Описание</span></label>
          <VTextArea />
        </div>
        <div class="create-task__field">
          <div for="" class="create-task__label">
            <span>Проект</span><span class="font_error">*</span>
          </div>
          <VSelect
            :activeValues="projectActiveValue"
            :options="projectsOptions"
            :isDisabled="isProjectsLoading"
            @onChange="handleProjectsSelectChange"
          />
        </div>
        <div class="create-task__field">
          <div for="" class="create-task__label">
            <span>Исполнитель</span>
          </div>
          <VSelect
            :activeValues="userActiveValue"
            :options="usersOptions"
            :isDisabled="isUsersLoading"
            @onChange="handleUsersSelectChange"
          />
        </div>
      </template>

      <template v-slot:footer>
        <VButton theme="secondary" text="Отмена" @onClick="handleCancelClick" />
        <VButton text="Создать задачу" type="submit" />
      </template>
    </EditOrCreateSample>
  </PageWrapper>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";

import EditOrCreateSample from "@/components/edit-or-create-sample/EditOrCreateSample.vue";
import PageWrapper from "@/components/wrappers/page-wrapper/PageWrapper.vue";
import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import VTextArea from "@/components/v-textarea/VTextArea.vue";
import VSelect from "@/components/v-select/VSelect.vue";

export default {
  name: "CreateTask",

  components: {
    EditOrCreateSample,
    PageWrapper,
    VButton,
    VInput,
    VTextArea,
    VSelect,
  },

  data: () => ({
    isProjectsLoading: true,
    projectsOptions: [],
    projectActiveValue: '',

    isUsersLoading: true,
    usersOptions: [],
    userActiveValue: '',
  }),

  methods: {
    handleCancelClick() {
      this.$router.push({
        name: "tasks-page",
        query: { authorId: this.$store.state.user._id },
      });
    },

    handleProjectsSelectChange(value) {
      this.projectActiveValue = value;
    },

    handleUsersSelectChange(value) {
      this.userActiveValue = value;
    },

    async loadProjects() {
      this.isProjectsLoading = true;

      try {
        const response = await axios.post(`${BASE_API_URL}/projects/search`, {
          page: 1,
          limit: 200,
        });

        this.projectsOptions = response.data.projects.map((project) => ({
          value: project._id,
          name: project.name,
        }));
      } catch (error) {
        console.log("error", error);
      } finally {
        this.isProjectsLoading = false;
      }
    },

    async loadUsers() {
      this.isUsersLoading = true;

      try {
        const response = await axios.post(`${BASE_API_URL}/users/search`, {
          page: 1,
          limit: 200,
        });

        this.usersOptions = response.data.users.map((user) => ({
          value: user._id,
          name: user.name,
        }));
      } catch (error) {
        console.log("error", error);
      } finally {
        this.isUsersLoading = false;
      }
    },
  },

  mounted() {
    this.loadProjects();
    this.loadUsers();
  },
};
</script>
