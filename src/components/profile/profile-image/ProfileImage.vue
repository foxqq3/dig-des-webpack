<template>
  <div
    class="profile-image"
    @mouseenter="handleMouseEnterImage"
    @mouseleave="handleMouseLeaveImage"
  >
    <span class="profile-image__initials">{{ initials }}</span>
    <img :src="image" class="profile-image__image" alt="Фото пользователя" />
    <div class="profile-image__button">
      <DropdownButton
        v-if="dropdownStatus || hoverStatus"
        :buttonSettings="buttonSettings"
        :dropdownItemSettings="dropdownItemSettings"
        @clickOutside="handleClickOutside"
        @clickButton="handleClickButton"
      />
    </div>
  </div>
</template>

<script>
import DropdownButton from "@/components/dropdown/dropdown-button/DropdpwnButton.vue";
import travolta from "@/assets/images/travolta.jpg";

export default {
  name: "ProfileImage",

  components: {
    DropdownButton,
  },

  props: {
    userName: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      image: travolta,

      dropdownStatus: false,

      hoverStatus: false,

      buttonSettings: {
        theme: "secondary",
        isSmall: true,
        svgName: "browse",
      },

      dropdownItemSettings: [
        {
          value: 1,
          name: "Редактировать",
        },
        {
          value: 2,
          name: "Удалить",
          isError: true,
        },
      ],
    };
  },

  computed: {
    initials() {
      return "ДТ";
    },
  },

  methods: {
    handleClickButton(status) {
      this.dropdownStatus = status;
    },

    handleClickOutside(status) {
      this.dropdownStatus = status;
    },

    handleMouseEnterImage() {
      this.hoverStatus = true;
    },

    handleMouseLeaveImage() {
      this.hoverStatus = false;
    },
  },
};
</script>
