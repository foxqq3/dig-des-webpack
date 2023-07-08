<template>
  <div class="work-item-none">
    <span class="work-item-none__title"> {{ titleText }}</span>
    <VButton v-if="isButton" theme="primary" text="Добавить" @click="clickButtonAdd" />
  </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";

export default {
  name: "VPlug",

  components: {
    VButton,
  },

  props: {
    titleText: {
      type: String,
      default: "",
    },

    isButton: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    clickButtonAdd() {
      this.$emit("clickAdd");
    },
  },
};
</script>
