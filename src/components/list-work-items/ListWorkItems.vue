<template>
  <div class="list-work-items">
    <WorkItem
      v-for="item in dataWorkItems"
      :key="item.id"
      :info="item"
      @onNameClick="handleNameClick"
      @onEditClick="handleEditClick"
      @onDeleteClick="handleDeleteClick"
    />
  </div>
</template>

<script>
import WorkItem from "@/components/work-item/WorkItem.vue";

export default {
  name: "TaskPage",

  components: {
    WorkItem,
  },

  props: {
    dataWorkItems: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    handleNameClick(value) {
      this.$emit("onNameClick", value);
    },

    handleEditClick(value) {
      this.$emit("onEditClick", value);
    },

    handleDeleteClick(value) {
      this.$emit("onDeleteClick", value);
    },
  },
};
</script>
