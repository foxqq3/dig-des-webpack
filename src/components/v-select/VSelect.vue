<template>
  <div v-click-outside="handleOutsideClick" class="v-select">
    <button :class="classTrigger" :disabled="isDisabled" @click.prevent="handleTriggerClick">
      {{ triggerButtonText }}
      <div class="v-select__trigger-svg">
        <VSvgIcon :name="triggerSvg" />
      </div>
    </button>
    <div class="v-select__list">
      <DropdownList
        v-if="isDropdownListActive"
        :hasSearch="hasSearch"
        :activeValues="activeValues"
        :items="options"
        :isMultiple="isMultiple"
        @onClick="handleDropdownItemClick"
      />
    </div>
  </div>
</template>

<script>
import DropdownList from "@/components/dropdown/dropdown-list/DropdownList.vue";
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";
import VInput from "@/components/v-input/VInput.vue";

export default {
  name: "VSelect",

  components: {
    DropdownList,
    VSvgIcon,
    VInput,
  },

  props: {
    activeValues: {
      type: [String, Number, Array],
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    hasSearch: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Выберите значение...",
    },
    isMultiple: {
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
      isDropdownListActive: false,
    };
  },

  computed: {
    triggerButtonText() {
      if (!this.activeValues || !this.activeValues.length) return this.placeholder;

      if (this.activeValues && Array.isArray(this.activeValues)) {
        return `Выбрано: ${this.activeValues.length}`;
      }

      return (
        this.options.find((option) => option.value === this.activeValues).name ||
        this.placeholder
      );
    },

    triggerSvg() {
      return this.isDropdownListActive ? "arrow-up" : "arrow-down";
    },

    classTrigger() {
      return [
        "v-select__trigger",
        {
          active: this.isDropdownListActive,
          empty: !this.activeValues || !this.activeValues.length,
        },
      ];
    },

    isActive() {
      return Boolean(this.options.find((option) => option.value === this.activeValues));
    },
  },

  methods: {
    handleOutsideClick() {
      this.isDropdownListActive = false;
    },

    handleTriggerClick() {
      this.isDropdownListActive = !this.isDropdownListActive;
    },

    handleDropdownItemClick(value) {
      if (this.isMultiple) {
        if (this.activeValues.includes(value)) {
          this.$emit(
            "onChange",
            this.activeValues.filter((item) => item !== value)
          );
        } else {
          this.$emit("onChange", [...this.activeValues, value]);
        }
        return;
      }

      this.$emit("onChange", value);
      this.isDropdownListActive = false;
    },
  },
};
</script>
