<template>
  <div class="list-work-items">
    <WorkItem v-for="item in dataWorkItems" :key="item.id" :info="item" />
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
};
</script>
