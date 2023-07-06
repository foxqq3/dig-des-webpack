<template>
  <button :class="classButton" @click="click">
    <AvatarIcon v-if="image" person="Джон Траволта" />
    {{ text }}
    <div v-if="svgName" class="button__svg-wrapper">
      <VSvgIcon :name="svgName" />
    </div>
  </button>
</template>

<script>
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";
import AvatarIcon from "@/components/avatar-icon/AvatarIcon.vue";

export default {
  name: 'VButton',

  components: {
    VSvgIcon,
    AvatarIcon,
  },

  props: {
    text: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "primary",
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    svgName: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: null,
    },
  },

  computed: {
    classButton() {
      return [
        "button",
        {
          button_primary: this.theme === "primary",
          button_secondary: this.theme === "secondary",
          button_profile: this.theme === "profile",
          button_menu: this.theme === "menu",
          active: this.isActive,
          button_small: this.isSmall,
        },
      ];
    },
  },

  methods: {
    click(event) {
      this.$emit("click", event);
    },
  },
};
</script>
