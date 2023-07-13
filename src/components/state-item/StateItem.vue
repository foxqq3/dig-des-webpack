<template>
  <span :class="className">{{ statuses[status] }}</span>
</template>

<script>
export default {
  name: "StateItemVue",
  props: {
    status: {
      type: String,
      required: true,
      validator: function (value) {
        return [
          "DRAFT",
          "IN_PROCESS",
          "COMPLETED",
          "TESTING",
          "TESTING_DONE",
          "CLOSED",
          "DELETED",
          "ACTIVE",
          "BLOCKED",
        ].includes(value);
      },
    },
  },

  data() {
    return {
      statuses: {
        DRAFT: "Черновик",
        IN_PROCESS: "В работе",
        TESTING: "Тестирование",
        COMPLETED: "Завершена",
        TESTING_DONE: "Выполнена",
        CLOSED: "Закрыта",
        ACTIVE: "Активен",
        DISABLED: "Не активен",
        DELETED: "Уалена",
      },
    };
  },

  computed: {
    className() {
      return [
        "state-item",
        {
          "state-item_bronze": ["DRAFT", "IN_PROCESS", "TESTING"].includes(this.status),
          "state-item_primary": [
            "COMPLETED",
            "TESTING_DONE",
            "CLOSED",
            "ACTIVE",
          ].includes(this.status),
          "state-item_error": this.status === "DELETED",
          "state-item_disabled": this.status === "DISABLED",
        },
      ];
    },
  },
};
</script>
