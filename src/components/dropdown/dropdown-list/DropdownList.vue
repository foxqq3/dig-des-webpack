<template>
  <ul class="dropdown-list">
    <VInput v-if="hasSearch" isSearch isSmall />
    <li v-for="option in options" :key="option.value">
      <DropdownListItem
        :content="option.name"
        :isActive="option.isActive"
        :isError="option.isError"
        :isCheckbox="isMultiple"
        @click="handleClick(option)"
      />
    </li>
  </ul>
</template>

<script>
import DropdownListItem from "@/components/dropdown/dropdown-list-item/DropdownListItem.vue";

export default {
  name: "DropdownList",

  components: {
    DropdownListItem,
  },

  data: () => ({
    search: "",
  }),

  props: {
    hasSearch: {
      type: Boolean,
      default: false,
    },

    activeValues: {
      type: [String, Number, Array],
      required: true,
    },

    items: {
      type: Array,
      default: () => [],
    },

    isMultiple: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    options() {
      return this.items
        .map((item) => ({
          ...item,
          isActive: this.isMultiple
            ? this.activeValues.includes(item.value)
            : this.activeValues === item.value,
        }))
        .filter((item) => {
          if (!this.hasSearch || !this.search) return true;

          const nameInLower = item.name.toLowerCase();
          const searchInLower = this.search.toLowerCase();

          return nameInLower.includes(searchInLower);
        });
    },
  },

  methods: {
    handleClick(item) {
      this.$emit("onClick", item.value);
    },
  },
};
</script>
