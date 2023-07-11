<template>
  <div class="">
    <h1>Авторизация</h1>
    <div>
      <label for="login"> Логин </label>
      <VInput id="login" placeholder="Введите логин..." />
    </div>
    <div>
      <label for="login"> Пароль </label>
      <VInput id="password" placeholder="Введите пароль..." />
    </div>
    <VButton theme="primary" text="Вход" @onClick="handleClickEnter" />
  </div>
</template>

<script>
import VInput from "@/components/v-input/VInput.vue";
import VButton from "@/components/v-button/VButton.vue";

export default {
  name: "LoginPage",

  components: {
    VInput,
    VButton,
  },

  methods: {
    handleClickEnter() {
      this.$router.push({ name: "projects-page" });
    },
  },
};
</script>
