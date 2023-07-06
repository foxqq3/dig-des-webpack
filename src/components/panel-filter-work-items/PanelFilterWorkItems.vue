<template>
  <div class="panel-filter-work-items">
    <VInput @input="handleInput" isSearch/>
    <VButton svgName="filter" theme="secondary" isSmall />
    <VButton text="Добавить" theme="secondary" />
  </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import SelectField from '@/components/select-field/SelectField.vue';

export default {
  name: "PanelFirlterWorkItems",

  components: { VButton, VInput,SelectField },

  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleInput(value) {
      this.inputValue = value;
    },
  },
};
</script>
