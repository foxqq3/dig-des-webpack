<template>
  <PopupSample @onSubmit="handleSubmit" isForm>
    <template v-slot:header>
      <h2>Редактирование проекта</h2>
    </template>

    <template v-slot:body-form>
      <div class="project-create-popup__popup-field">
        <label for="code">Код <span class="font_error">*</span></label>
        <VInput id="code" v-model="code" required :isDisabled="isLoading" />
      </div>

      <div class="project-create-popup__popup-field">
        <label for="name">Название <span class="font_error">*</span></label>
        <VInput id="name" v-model="name" required :isDisabled="isLoading" />
      </div>
    </template>

    <template v-slot:footer>
      <VButton
        type="button"
        theme="secondary"
        text="Отмена"
        :disabled="isLoading"
        @onClick="handleCancelClick"
      />
      <VButton type="submit" text="Сохранить" :disabled="isLoading" />
    </template>
  </PopupSample>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";

import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import PopupSample from "@/components/popups/popup-sample/PopupSample.vue";

export default {
  name: "ProjectEditPopup",

  components: { VButton, VInput, PopupSample },

  props: {
    initialData: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isLoading: false,
      code: this.initialData.code,
      name: this.initialData.name,
    };
  },

  methods: {
    handleCancelClick() {
      this.$emit("onClose");
    },

    async handleSubmit() {
      this.isLoading = true;

      try {
        await axios.put(`${BASE_API_URL}/projects/`, {
          _id: this.initialData._id,
          name: this.name,
          code: this.code,
        });
        this.$emit("onEdited");
      } catch (error) {
        alert("что-то пошло не так");
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
