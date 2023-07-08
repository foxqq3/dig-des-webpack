<template>
  <div
    class="work-item"
    @mouseenter="handleMouseEnterItem"
    @mouseleave="handleMouseLeaveItem"
  >
    <div class="work-item__info">
      <div class="work-item__name-wrapper">
        <span class="work-item__name" :title="info.title">
          {{ info.title }}
        </span>
        <AvatarIcon v-if="info.type === 'task'" person="Джон Траволта" />
      </div>
      <div class="work-item__description">
        <div class="work-item__description-wrapper">
          <span class="work-item__number" :title="info.id">
            {{ info.id }}
          </span>
          <span class="work-item__state">
            {{ info.name.creator }} создал(а) {{ info.time.create }} назад
          </span>
          <StateItem v-if="info.type === 'task'" :status="info.status" />
        </div>
        <span class="work-item__state">
          {{ info.name.changer }} изменил(а) {{ info.time.change }} назад
        </span>
      </div>
    </div>
    <DropdownButton
      v-if="dropdownStatus || hoverStatus"
      :buttonSettings="buttonSettings"
      :dropdownItemSettings="dropdownItemSettings"
      @clickOutside="handleClickOutside"
      @clickButton="handleClickButton"
    />
  </div>
</template>

<script>
import AvatarIcon from "@/components/avatar-icon/AvatarIcon.vue";
import StateItem from "@/components/state-item/StateItem.vue";
import DropdownButton from "@/components/dropdown/dropdown-button/DropdpwnButton.vue";

import travolta from "@/assets/images/travolta.jpg";

export default {
  name: "WorkItem",

  components: {
    AvatarIcon,
    StateItem,
    DropdownButton,
  },

  data() {
    return {
      image: travolta,
      buttonSettings: {
        theme: "secondary",
        isSmall: true,
        svgName: "browse",
      },

      dropdownItemSettings: [
        {
          value: 1,
          name: "Редактировать",
        },
        {
          value: 2,
          name: "Удалить",
          isError: true,
        },
      ],

      dropdownStatus: false,
      hoverStatus: false,
    };
  },

  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    // handleMouseEnter(event) {
    //   console.log(event.target);
    //   const isTextClamped = (element) => element.scrollHeight > element.clientHeight;
    //   console.log(isTextClamped(event.target));
    //   return isTextClamped;
    // },
    handleClickButton(status) {
      this.dropdownStatus = status;
    },

    handleClickOutside(status) {
      this.dropdownStatus = status;
    },

    handleMouseEnterItem() {
      this.hoverStatus = true;
    },

    handleMouseLeaveItem() {
      this.hoverStatus = false;
    },
  },
};
</script>
