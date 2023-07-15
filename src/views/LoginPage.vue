<template>
  <div class="">
    <form @submit.prevent="handleSubmit">
      <h1>Авторизация</h1>
      <div>
        <label for="login"> Логин </label>
        <VInput
          :value="login"
          id="login"
          placeholder="Введите логин..."
          :isDisabled="loading"
          @change="handleLoginChange"
        />
      </div>
      <div>
        <label for="login"> Пароль </label>
        <VInput
          id="password"
          :value="password"
          placeholder="Введите пароль..."
          :isDisabled="loading"
          @change="handlePasswordChange"
        />
      </div>
      <VButton theme="primary" text="Вход" type="submit" :disabled="loading" />
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
    login: "rozhdestvensky.d",
    password: "jc63fk",
  }),

  methods: {
    handleLoginChange(value) {
      this.login = value;
    },
    handlePasswordChange(value) {
      this.password = value;
    },
    async handleSubmit() {
      this.loading = true;

      if (!this.login || !this.password) {
        alert("Логин и пароль пусты");
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
        alert("что-то пошло не так");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
