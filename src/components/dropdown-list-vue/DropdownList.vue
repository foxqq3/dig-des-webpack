<template>
  <div class="dropdown-list">
    <ul class="dropdown-list__wrapper">
      <li v-for="item in settings" :key="item">
        <a :href="item.href" class="dropdown-list__item">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
