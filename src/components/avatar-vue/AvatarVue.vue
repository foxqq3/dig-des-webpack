<template>
  <div class="avatar" :title="person">
    <img :src="image" class="avatar__image" alt="Фото пользователя" />
  </div>
</template>

<script>
import travolta from "@/assets/images/travolta.jpg";

export default {
  name: "AvatarVue",

  props: {
    person: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      image: travolta,
    };
  },
};
</script>

<style lang="scss"></style>
