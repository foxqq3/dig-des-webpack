<template>
  <PageWrapper>
    <EditOrCreateSample @onSubmit="handleSubmit">
      <template v-slot:header>
        <h1>Редактирование задачи</h1>
      </template>

      <template v-slot:body-form>
        <span v-if="isErrorSubmit" class="font_error">Заполните обязательные поля</span>
        <div class="create-task__field">
          <label for="name" class="create-task__label">
            <span>Название</span> <span class="font_error">*</span></label
          >
          <VInput id="name" v-model="name" :isError="isErrorSubmit" />
        </div>
        <div class="create-task__field">
          <label for="description" class="create-task__label">
            <span>Описание</span><span class="font_error">*</span></label
          >
          <VTextArea id="description" v-model="description" :isError="isErrorSubmit" />
        </div>
        <div class="create-task__field">
          <div for="" class="create-task__label">
            <span>Проект</span><span class="font_error">*</span>
          </div>
          <VSelect
            :activeValues="projectActiveValue"
            :options="projectsOptions"
            :isDisabled="isProjectsLoading"
            :isError="isErrorSubmit"
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
        <VButton
          theme="secondary"
          text="Отмена"
          :disabled="isPageLoading"
          type="button"
          @onClick="handleCancelClick"
        />
        <VButton text="Сохранить изменения" type="submit" :disabled="isPageLoading" />
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
  name: "EditTaskPage",

  components: {
    EditOrCreateSample,
    PageWrapper,
    VButton,
    VInput,
    VTextArea,
    VSelect,
  },

  data: () => ({
    name: "",
    description: "",
    isErrorSubmit: false,

    isPageLoading: false,

    isProjectsLoading: true,
    projectsOptions: [],
    projectActiveValue: "",

    isUsersLoading: true,
    usersOptions: [],
    userActiveValue: "",

    currentTask: "",
  }),

  methods: {
    handleCancelClick() {
      this.$router.push({
        name: "tasks-page",
      });
    },

    handleProjectsSelectChange(value) {
      this.projectActiveValue = value;
    },

    handleUsersSelectChange(value) {
      this.userActiveValue = value;
    },

    handleSubmit() {
      if (!this.projectActiveValue || !this.name || !this.description)
        return (this.isErrorSubmit = true);

      this.editTask();

      this.$router.push({
        name: "tasks-page",
      });
    },

    async editTask() {
      this.isPageLoading = true;
      try {
        await axios.put(`${BASE_API_URL}/tasks`, {
          _id: this.$route.params.id,
          name: this.name,
          description: this.description,
          executor: this.userActiveValue,
          projectId: this.projectActiveValue,
        });
      } catch (error) {
      } finally {
        this.isPageLoading = false;
      }
    },

    async loadCurrentTask() {
      this.isPageLoading = true;
      try {
        const response = await axios.get(
          `${BASE_API_URL}/tasks/${this.$route.params.id}`,
          {}
        );
        this.currentTask = response.data;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.isPageLoading = false;
      }
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

  async mounted() {
    await this.loadProjects();
    await this.loadUsers();
    await this.loadCurrentTask();
    this.name = this.currentTask.name;
    this.description = this.currentTask.description;
    this.userActiveValue = this.currentTask.executor;
    this.projectActiveValue = this.currentTask.projectId;
  },
};
</script>
