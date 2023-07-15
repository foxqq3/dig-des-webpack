<template>
  <div class="preloader">
    <div class="preloader__svg">
      <VSvgIcon name="preloader" width="40px" height="40px" />
    </div>
  </div>
</template>

<script>
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";

export default {
  name: "Preloader",

  components: {
    VSvgIcon,
  },
};
</script>

<style></style>
