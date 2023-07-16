<template>
  <ul class="dropdown-list">
    <VInput
      v-if="hasSearch"
      isSearch
      isSmall
      placeholder="Поиск..."
      @change="handleSearchChange"
    />
    <div class="dropdown-list__wrapper">
      <li v-for="option in options" :key="option.value">
        <DropdownListItem
          :content="option.name"
          :isActive="option.isActive"
          :isError="option.isError"
          :isCheckbox="isMultiple"
          @click="handleClick(option)"
        />
      </li>
    </div>
  </ul>
</template>

<script>
import DropdownListItem from "@/components/dropdown/dropdown-list-item/DropdownListItem.vue";
import VInput from "@/components/v-input/VInput.vue";

export default {
  name: "DropdownList",

  components: {
    DropdownListItem,
    VInput,
  },

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

  data() {
    return {
      search: "",
    };
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

    handleSearchChange() {
      this.$emit("onSearchChange", value);
    },
  },
};
</script>
