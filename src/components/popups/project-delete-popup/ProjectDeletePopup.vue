<template>
  <PopupSample>
    <template v-slot:header>
      <h2>Удаление</h2>
    </template>

    <template v-slot:body-message>
      <span>
        Вы точно хотите <span class="font_error">удалить</span> проект "{{
          initialData.name
        }}"?
      </span>
    </template>

    <template v-slot:footer>
      <VButton
        theme="secondary"
        text="Отмена"
        :disabled="isLoading"
        @onClick="handleCancelClick"
      />
      <VButton text="Да" :disabled="isLoading" @onClick="handleConfirmClick" />
    </template>
  </PopupSample>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";

import PopupSample from "@/components/popups/popup-sample/PopupSample.vue";
import VButton from "@/components/v-button/VButton.vue";

export default {
  name: "ProjectDeletePopup",

  components: { PopupSample, VButton },

  props: {
    initialData: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isLoading: false,
    };
  },

  methods: {
    handleCancelClick() {
      this.$emit("onClose");
    },

    async handleConfirmClick() {
      this.isLoading = true;

      try {
        await axios.delete(`${BASE_API_URL}/projects/${this.initialData._id}`, {});
        this.$emit("onDeleted");
      } catch (error) {
        alert("что-то пошло не так");
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
