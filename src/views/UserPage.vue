<template>
  <PageWrapper>
    
    <h1>User page</h1>

    <div>user id: {{ $route.params.id }}</div>
  </PageWrapper>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";
import { mapState } from "vuex";
import { debounce } from "@/helper";

import ProfileUser from "@/components/profile/profile-user/ProfileUser.vue";
import PageWrapper from "@/components/wrappers/page-wrapper/PageWrapper.vue";

export default {
  name: "UserPage",

  components: {
    ProfileUser,
    PageWrapper,
  },



  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>
