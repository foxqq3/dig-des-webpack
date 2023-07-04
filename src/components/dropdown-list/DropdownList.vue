<template>
  <ul class="dropdown-list">
    <li v-for="item in dropdownItemCorrect" :key="item.id" @click="select(item)">
      <DropdownListItem
        :content="item.name"
        :isActive="item.isActive"
        :isError="item.isError"
        :isCheckbox="isMultiple"
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
    isMultiple: {
      type: Boolean,
      default: false,
    },
    dropdownItemSettings: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      dropdownItemCorrect: this.dropdownItemSettings,
    };
  },

  computed: {
    isCheckbox() {
      if (this.mode === "multiple") {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    select(item) {
      if (this.isMultiple) {
        this.dropdownItemCorrect = this.dropdownItemCorrect.map(function (element) {
          if (item.id === element.id) {
            element.isActive = !element.isActive;
            return element;
          } else {
            return element;
          }
        });
      } else {
        this.dropdownItemCorrect = this.dropdownItemCorrect.map(function (element) {
          if (item.id === element.id) {
            element.isActive = true;
            return element;
          } else if (element.isActive === true) {
            element.isActive = false;
            return element;
          } else {
            return element;
          }
        });
      }
    },
  },

  mounted() {
    this.dropdownItemCorrect = this.dropdownItemCorrect.map(function (element) {
       element.isActive = false;
       return element;
    });
  },
};
</script>
