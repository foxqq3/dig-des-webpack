<template>
  <div class="work-item">
    <div class="work-item__info">
      <div class="work-item__name-wrapper">
        <span class="work-item__name" :title="info.title" @mouseenter="handleMouseEnter">
          {{ info.title }}
        </span>
        <AvatarIcon v-if="info.type === 'task'" person="Джон Траволта" />
      </div>
      <div class="work-item__description">
        <div class="work-item__description-wrapper">
          <span class="work-item__number" :title="info.id" @mouseenter="handleMouseEnter">
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
    <div :class="browseButtonClasses">
      <DropdownMenu
        :buttonSettings="buttonSettings"
        :isDropdownItemMultiple="false"
        :dropdownItemSettings="dropdownItemSettings"
        @clickButtonDropdown="clickButtonDropdown"
      />
    </div>
  </div>
</template>

<script>
import AvatarIcon from "@/components/avatar-icon/AvatarIcon.vue";
import StateItem from "@/components/state-item/StateItem.vue";
import VButton from "@/components/v-button/VButton.vue";
import DropdownMenu from "@/components/dropdown-menu/DropdownMenu.vue";
import travolta from "@/assets/images/travolta.jpg";

export default {
  name: "WorkItem",

  components: {
    AvatarIcon,
    StateItem,
    VButton,
    DropdownMenu,
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
          id: 1,
          name: "Редактировать",
        },
        {
          id: 2,
          name: "Удалить",
          isError: true,
        },
      ],

      dropdownStatus: null,
    };
  },

  props: {
    info: {
      type: Object,
      default: {},
    },
  },

  methods: {
    handleMouseEnter(event) {
      console.log(event.target);
      const isTextClamped = (element) => element.scrollHeight > element.clientHeight;
      console.log(isTextClamped(event.target));
      return isTextClamped;
    },

    clickButtonDropdown(status) {
      this.dropdownStatus = !status;
      console.log(this.dropdownStatus);
      return isTextClamped;
    },
  },

  computed: {
    browseButtonClasses() {
      return [
        "work-item__browse-button-wrapper",
        {
          active: this.dropdownStatus,
        },
      ];
    },
  },
};
</script>
