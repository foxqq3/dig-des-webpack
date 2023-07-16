<template>
  <div class="input__wrapper">
    <input
      :value="value"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :class="classInput"
      :disabled="isDisabled"
      :id="id"
      @input="handleInput"
      @keyup.enter="handleEnterKey"
      @blur="handleBlur"
    />
    <div v-if="isSearch" class="input__svg">
      <div class="input__svg-clear" @click="handleClickClear">
        <VSvgIcon v-if="value" name="clear" width="16px" height="16px" />
      </div>
      <div :class="classSearch">
        <VSvgIcon name="search" />
      </div>
    </div>
  </div>
</template>

<script>
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";

export default {
  name: "VInput",

  components: { VSvgIcon },

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    value: {
      type: String,
      default: "",
    },
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
    placeholder: {
      type: String,
      default: "Введите текст...",
    },
    required: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },

  methods: {
    handleInput(e) {
      this.$emit("change", e.target.value);
    },

    handleEnterKey(e) {
      this.$emit("pressEnter", e.target);
    },

    handleClickClear() {
      this.$emit("change", "");
    },

    handleBlur() {
      this.$emit("blur", "");
    },
  },

  computed: {
    classInput() {
      return [
        "input",
        {
          small: this.isSmall,
          error: this.isError,
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
