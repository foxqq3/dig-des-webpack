<template>
  <div class="list-work-items">
    <WorkItem v-for="item in dataWorkItem" :key="item.id" :info="item" />
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
    dataWorkItem: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
