<template>
  <div class="page">
    <NavigationPanel />
    <div class="page__content">
      <h2>Не найдено</h2>
    </div>
  </div>
</template>

<script>
import NavigationPanel from "@/components/navigation-panel/NavigationPanel.vue";
import ProfileUser from "@/components/profile/profile-user/ProfileUser.vue";

export default {
  name: "NotFoundPage",

  components: {
    NavigationPanel,
    ProfileUser,
  },
};
</script>