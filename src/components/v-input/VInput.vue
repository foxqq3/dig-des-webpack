<template>
  <div class="input__wrapper">
    <input
      v-model="value"
      type="text"
      placeholder="поиск"
      :class="classInput"
      :disabled="isDisabled"
       @input="handleInput"
    />
    <div v-if="isSearch" class="input__svg">
      <div class="input__svg-clear">
        <VSvgIcon
          v-if="value"
          name="clear"
          width="16px"
          height="16px"
          @click="handleClickClear"
        />
      </div>
      <div :class="classSearch">
        <VSvgIcon name="search" @click="handleClickSearch" />
      </div>
    </div>
  </div>
</template>

<script>
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";

export default {
  name: "VInput",

  components: { VSvgIcon },

  props: {
    isSearch: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      value: "",
    };
  },

  methods: {
    handleInput() {
      this.$emit("input", this.value);
    },

    handleClickClear() {
      this.value = "";
    },

    handleClickSearch() {
      this.$emit("clickSearch", this.value);
    },
  },

  computed: {
    classInput() {
      return [
        "input",
        {
          small: this.isSmall,
        },
      ];
    },

    classSearch() {
      return [
        "input__svg-search",
        {
          disabled: this.isDisabled && this.isSmall,
        },
      ];
    },
  },
};
</script>
