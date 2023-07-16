<template>
  <PopupSample>
    <template v-slot:header>
      <h2>Имеются несохраненные изменения</h2>
    </template>

    <template v-slot:body-message>
      <span> Вы хотите их сохранить? </span>
    </template>

    <template v-slot:footer>
      <VButton theme="secondary" text="Отмена" @onClick="handleCancelClick" />
      <VButton text="Нет, не сохранять" @onClick="handleExitClick" />
      <VButton text="Да сохранить" @onClick="handleSaveClick" />
    </template>
  </PopupSample>
</template>

<script>
import PopupSample from "@/components/popups/popup-sample/PopupSample.vue";
import VButton from "@/components/v-button/VButton.vue";

export default {
  name: "ProjectDeletePopup",

  components: { PopupSample, VButton },

  methods: {
    handleCancelClick() {
      this.$emit("onClose");
    },

    handleSaveClick() {
      this.$emit("onSave");
    },

    handleExitClick() {
      this.$emit("onExit");
    },
  },
};
</script>
