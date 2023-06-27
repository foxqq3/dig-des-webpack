<template>
  <div class="item">
    <div class="item__info">
      <div class="item__name-wrapper">
        <span class="item__name" :title="itemInfo.title">
          {{ itemInfo.title }}
        </span>
        <AvatarVue v-if="itemInfo.type === 'task'" person="Джон Траволта"></AvatarVue>
      </div>
      <div class="item__description">
        <div class="item__description-wrapper">
          <span class="item__number" :title="itemInfo.id">
            {{ itemInfo.id }}
          </span>
          <span class="item__state">
            {{ itemInfo.name.creator }} создал(а) {{ itemInfo.time.create }} назад
          </span>
          <StatusVue
            v-if="itemInfo.type === 'task'"
            :status="itemInfo.status"
          ></StatusVue>
        </div>
        <span class="item__state">
          {{ itemInfo.name.changer }} изменил(а) {{ itemInfo.time.change }} назад
        </span>
      </div>
    </div>
    <div class="item__browse-button-wrapper">
      <button class="button button_secondary_default button_icon">
        <SvgIconVue name="browse"></SvgIconVue>
      </button>
    </div>
  </div>
</template>

<script>
import SvgIconVue from "@/components/svg-icon-vue/SvgIconVue.vue";
import AvatarVue from "@/components/avatar-vue/AvatarVue.vue";
import StatusVue from "@/components/status-vue/StatusVue.vue";
import travolta from "@/assets/images/travolta.jpg";

export default {
  name: "ItemVue",

  components: {
    SvgIconVue,
    AvatarVue,
    StatusVue,
  },

  data() {
    return {
      image: travolta,
    };
  },

  props: {
    itemInfo: {
      type: Object,
      default: {}
    },
  },
};
</script>

<style lang="scss"></style>
