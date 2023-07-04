<template>
  <div class="avatar-icon" :title="person">
    <img :src="image" class="avatar-icon__image" alt="Фото пользователя" />
  </div>
</template>

<script>
import travolta from "@/assets/images/travolta.jpg";

export default {
  name: "AvatarIcon",

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
