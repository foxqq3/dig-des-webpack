<template>
  <div class="login-page">
    <form class="login-page__form" @submit.prevent="handleSubmit">
      <div class="login-page__header">
        <h2>ВХОД</h2>
      </div>
      <div class="login-page__body">
        <div class="login-page__body-wrapper">
          <span v-if="validError" class="font_error">Неправильный логин или пароль.</span>
          <div class="login-page__field">
            <label class="login-page__label" for="login">
              <span>Логин</span>
              <span class="font_error">*</span>
            </label>
            <VInput
              :value="login"
              id="login"
              placeholder="Введите логин..."
              :isDisabled="loading"
              :isError="validError"
              @change="handleLoginChange"
              :maxLength="20"
            />
          </div>
          <div class="login-page__field">
            <label class="login-page__label" for="password">
              <span>Пароль</span>
              <span class="font_error">*</span>
            </label>
            <VInput
              id="password"
              :value="password"
              :isError="validError"
              :type="typePassword"
              placeholder="Введите пароль..."
              :isDisabled="loading"
              isPassword
              :maxLength="15"
              @change="handlePasswordChange"
              @passwordVisionToggle="handlePasswordVisionToggle"
            />
          </div>
        </div>
      </div>
      <div class="login-page__footer">
        <VButton theme="primary" text="Вход" type="submit" :disabled="loading" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";

import VInput from "@/components/v-input/VInput.vue";
import VButton from "@/components/v-button/VButton.vue";

export default {
  name: "LoginPage",

  components: {
    VInput,
    VButton,
  },

  data: () => ({
    loading: false,
    validError: false,
    login: "rozhdestvensky.d",
    password: "jc63fk",
    typePassword: "password",
  }),

  methods: {
    handleLoginChange(value) {
      this.login = value;
    },

    handlePasswordChange(value) {
      this.password = value;
    },

    handlePasswordVisionToggle() {
      this.typePassword === "password"
        ? (this.typePassword = "text")
        : (this.typePassword = "password");
    },

    async handleSubmit() {
      this.loading = true;
      this.validError = false;

      if (!this.login || !this.password) {
        this.validError = true;
        this.loading = false;
        return;
      }

      try {
        const response = await axios.post(`${BASE_API_URL}/login`, {
          login: this.login,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);

        await this.$store.dispatch("loadCurrentUser");
        this.$router.push({ name: "projects-page" });
      } catch (error) {
        this.validError = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
