<template>
  <PageWrapper>
    <ProfileUser />
  </PageWrapper>
</template>

<script>
import ProfileUser from "@/components/profile/profile-user/ProfileUser.vue";
import PageWrapper from "@/components/wrappers/page-wrapper/PageWrapper.vue";

export default {
  name: "ProfilePage",

  components: {
    ProfileUser,
    PageWrapper,

  },
};
</script>
