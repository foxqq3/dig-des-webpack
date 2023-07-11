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
        :options="dropdownButtonOptions"
        buttonTheme="secondary"
        buttonSvgName="browse"
        buttonIsSmall
        :activeValue="dropdownButtonActiveValue"
        @onChange="handleActiveItemChange"
        @onClickOutside="handleClickOutsideDropdownButton"
        @onClickButton="handleClickDropdownButton"
      />
    </div>
  </div>
</template>

<script>
import DropdownButton from "@/components/dropdown/dropdown-button/DropdownButton.vue";
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

      dropdownButtonActiveValue: "",

      dropdownStatus: false,

      hoverStatus: false,

      dropdownButtonOptions: [
        {
          value: "edit",
          name: "Редактировать",
        },
        {
          value: "delete",
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
    handleClickDropdownButton(status) {
      this.dropdownStatus = status;
    },

    handleClickOutsideDropdownButton(status) {
      this.dropdownStatus = status;
    },

    handleMouseEnterImage() {
      this.hoverStatus = true;
    },

    handleMouseLeaveImage() {
      this.hoverStatus = false;
    },

    handleActiveItemChange(newActiveValue) {
      this.dropdownButtonActiveValue = newActiveValue;
    },
  },
};
</script>
