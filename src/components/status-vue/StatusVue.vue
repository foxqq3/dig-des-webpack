<template>
  <span :class="className">{{ status }}</span>
</template>

<script>
export default {
  name: "StateVue",
  props: {
    status: {
      type: String,
      required: true,
    },
  },

  computed: {
    className() {
      if (["Черновик", "В работе", "Тестирование"].includes(this.status)) {
        return "status status_bronze";
      } else if (["pfdthityf", "Выполнена", "Закрыта", "Активен"].includes(this.status)) {
        return "status status_primary";
      } else if (this.status === "Удалена") {
        return "status status_error";
      } else if (this.status === "Не активен") {
        return "status status_disabled";
      }
    },
  },
};
</script>

<style lang="scss"></style>
