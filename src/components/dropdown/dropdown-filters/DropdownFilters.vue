<template>
  <div class="dropdown-filters">
    <VButton svgName="filter" theme="secondary" isSmall @onClick="handleFilterClick" />

    <div v-if="isDropdownActive" class="dropdown-filters__content-wrapper">
      <div class="dropdown-filters__content">
        <div class="dropdown-filters__select">
          <span class="dropdown-filters__select-name">Статус</span>
          <VSelect
            :activeValues="filterStatus"
            :options="filterStatusOptions"
            isMultiple
            @onChange="handleFilterStatusChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
import VSelect from "@/components/v-select/VSelect.vue";

export default {
  name: "DropdownFilters",
  components: {
    VButton,
    VSelect,
  },

  props: {},

  data() {
    return {
      isDropdownActive: false,

      filter: {},

      filterStatus: "",

      filterStatusOptions: [
        {
          value: "DRAFT",
          name: "Черновик",
        },
        {
          value: "IN_PROCESS",
          name: "В работе",
        },
        {
          value: "TESTING",
          name: "Тестирование",
        },
        {
          value: "COMPLETED",
          name: "Завершена",
        },
        {
          value: "TESTING_DONE",
          name: "Выполнена",
        },
        {
          value: "CLOSED",
          name: "Закрыта",
        },
        {
          value: "DELETED",
          name: "Удалена",
        },
      ],
    };
  },

  methods: {
    handleFilterStatusChange(value) {
      this.filterStatus = value;
    },

    handleFilterClick() {
      this.isDropdownActive = !this.isDropdownActive;
    },
  },
};
</script>

<style></style>
