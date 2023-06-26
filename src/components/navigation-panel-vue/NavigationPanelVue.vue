<template>
  <header class="navigation-panel">
    <nav>
      <ul class="navigation-panel__menu">
        <li>
          <a href="#" class="navigation-panel__menu-item">Проекты</a>
        </li>
        <li>
          <a href="#" class="navigation-panel__menu-item">Задачи</a>
        </li>
        <li>
          <a href="#" class="navigation-panel__menu-item">Пользователи</a>
        </li>
      </ul>
    </nav>
    <div class="navigation-panel__profile-button-wrapper">
      <button class="profile-button profile-button_default" :title="profile.name">
        <div class="profile-button__content">
          <AvatarVue person="Джон Траволта"></AvatarVue>
          <SvgIconVue name="arrow-down"></SvgIconVue>
        </div>
      </button>
    </div>
  </header>
</template>

<script>
import travolta from "@/assets/images/travolta.jpg";
import SvgIconVue from "@/components/svg-icon-vue/SvgIconVue.vue";
import AvatarVue from '@/components/avatar-vue/AvatarVue.vue';

export default {
  name: "NavigationPanelVue",

  components: {
    SvgIconVue,
    AvatarVue
  },

  data() {
    return {
      profile: {
        name: "John Travolta",
        image: travolta,
      },
    };
  },
};
</script>

<style></style>
