<template>
  <div class="avatar-icon">
    <img
      v-if="avatar"
      :src="avatar"
      class="avatar-icon__image"
      alt="Фото пользователя"
      :title="name"
    />
    <span v-if="!avatar" class="avatar-icon__initials" :title="name">{{ initials }}</span>
  </div>
</template>

<script>
import { BASE_URL } from "@/data";
import travolta from "@/assets/images/travolta.jpg";

export default {
  name: "AvatarIcon",

  props: {
    picture: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "",
    },
  },

  computed: {
    avatar() {
      if (this.picture) {
        return `${BASE_URL}${this.picture}`;
      }
      return "";
    },

    initials() {
      if (this.name && this.name.split(" ").length > 1) {
        let nameAsArray = this.name.split(" ");
        return nameAsArray[0][0] + nameAsArray[1][0];
      }
    },
  },
};
</script>
