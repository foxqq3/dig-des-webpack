<template>
  <span :class="className">{{ status }}</span>
</template>

<script>
export default {
  name: "StateItemVue",
  props: {
    status: {
      type: String,
      required: true,
    },
  },

  computed: {
    className() {
      if (["Черновик", "В работе", "Тестирование"].includes(this.status)) {
        return "state-item state-item_bronze";
      } else if (["pfdthityf", "Выполнена", "Закрыта", "Активен"].includes(this.status)) {
        return "state-item state-item_primary";
      } else if (this.status === "Удалена") {
        return "state-item state-item_error";
      } else if (this.status === "Не активен") {
        return "state-item state-item_disabled";
      }
    },
  },
};
</script>
