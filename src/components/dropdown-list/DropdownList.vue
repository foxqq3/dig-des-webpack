<template>
  <ul class="dropdown-list">
    <li v-for="option in options" :key="option.value">
      <DropdownListItem
        :content="option.name"
        :isActive="option.isActive"
        :isError="option.isError"
        :isCheckbox="isMultiple"
        @click="handleSelect(option)"
      />
    </li>
  </ul>
</template>

<script>
import DropdownListItem from "@/components/dropdown-list-item/DropdownListItem.vue";

export default {
  name: "DropdownList",

  components: {
    DropdownListItem,
  },

  props: {
    value: {
      type: [String, Number, Array],
      required: true,
    },
    isMultiple: {
      type: Boolean,
      default: false,
    },
    dropdownItemSettings: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    options() {
      return this.dropdownItemSettings.map((item) => ({
        ...item,
        isActive: this.isMultiple
          ? this.value.includes(item.value)
          : this.value === item.value,
      }));
    },
  },

  methods: {
    handleSelect(item) {
      let value = null;
      if (this.isMultiple) {
        if (item.isActive) {
          value = this.value.filter((value) => value !== item.value);
        } else {
          value = [...this.value, item.value];
        }
      } else {
        value = item.value;
      }
      this.$emit("input", value);
    },
  },
};
</script>
