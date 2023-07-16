<template>
  <PageWrapper>
    <div class="user-page__buttons">
      <VButton
        theme="secondary"
        text="Вернуться к списку пользователей"
        svgPrepend
        svgName="arrow-back"
        @onClick="handleBackClick"
      />
      <VButton
        theme="secondary"
        text="Показать задачи"
        svgName="arrow-next"
        @onClick="handleShowTasksClick"
      />
    </div>
    <div class="user-page__content" v-if="!isLoading">
      <div class="user-page__image">
        <ProfileImage :name="info.name" :picture="info.picture" />
      </div>
      <div class="user-page__main-content">
        <div class="user-page__content-header">
          <div class="user-page__content-header-wrapper">
            <h2 class="user-page__name">{{ info.name }}</h2>
            <StateItem :status="info.status" />
          </div>
        </div>
        <div class="user-page__about">
          <span class="user-page__about-title"> О себе: </span>
          <p class="user-page__about-text">{{ info.description }}</p>
        </div>
      </div>
    </div>
    <Preloader v-if="isLoading" />
  </PageWrapper>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";

import PageWrapper from "@/components/wrappers/page-wrapper/PageWrapper.vue";
import ProfileImage from "@/components/profile/profile-image/ProfileImage.vue";
import StateItem from "@/components/state-item/StateItem.vue";
import Preloader from "@/components/preloader/Preloader.vue";
import VButton from "@/components/v-button/VButton.vue";

export default {
  name: "UserPage",

  components: {
    PageWrapper,
    StateItem,
    ProfileImage,
    Preloader,
    VButton,
  },

  data() {
    return {
      isLoading: false,
      info: "",
    };
  },

  methods: {
    handleBackClick() {
      this.$router.push({ name: "users-page" });
    },

    handleShowTasksClick() {
      const authorId = this.info._id;

      this.$router.push({ name: "tasks-page", query: { authorId } });
    },
    async getUser() {
      this.isLoading = true;
      try {
        const response = await axios.post(`${BASE_API_URL}/users/search`, {
          page: 1,
          limit: 1,
          filter: {
            _id: this.$route.params.id,
          },
        });

        this.info = response.data.users[0];
      } catch (error) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },

  created() {
    this.getUser();
  },
};
</script>
