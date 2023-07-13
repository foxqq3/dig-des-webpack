<template>
  <div
    class="work-item"
    @mouseenter="handleMouseEnterItem"
    @mouseleave="handleMouseLeaveItem"
  >
    <div class="work-item__info">
      <div class="work-item__name-wrapper">
        <span class="work-item__name" :title="info.name">
          {{ info.name }}
        </span>
        <AvatarIcon v-if="info.type === 'task'" person="Джон Траволта" />
      </div>
      <div class="work-item__description">
        <div class="work-item__description-wrapper">
          <span class="work-item__number" :title="info.code">
            {{ info.code }}
          </span>
          <span class="work-item__state">
          {{ info.author.name }} создал(а) {{ info.dateCreated }}
          </span>
          <StateItem v-if="info.status" :status="info.status" />
        </div>
        <span v-if="info.dateEdited" class="work-item__state">
          {{ info.authorEdited.name }} изменил(а) {{ info.dateEdited }}
        </span>
      </div>
    </div>
    <DropdownButton
      v-if="dropdownStatus || hoverStatus"
      :options="dropdownButtonOptions"
      buttonTheme="secondary"
      buttonSvgName="browse"
      buttonIsSmall
      :activeValue="dropdownButtonActiveValue"
      @onChange="handleActiveItemChange"
      @onClickOutside="handleClickOutsideDropdownButton"
      @onClickButton="handleClickDropdownButton"
    />
  </div>
</template>

<script>
import AvatarIcon from "@/components/avatar-icon/AvatarIcon.vue";
import StateItem from "@/components/state-item/StateItem.vue";
import DropdownButton from "@/components/dropdown/dropdown-button/DropdownButton.vue";

export default {
  name: "WorkItem",

  components: {
    AvatarIcon,
    StateItem,
    DropdownButton,
  },

  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      dropdownButtonActiveValue: "",

      dropdownButtonOptions: [
        {
          value: "edit",
          name: "Редактировать",
        },
        {
          value: "delete",
          name: "Удалить",
          isError: true,
        },
      ],

      dropdownStatus: false,

      hoverStatus: false,
    };
  },

  methods: {
    // handleMouseEnter(event) {
    //   console.log(event.target);
    //   const isTextClamped = (element) => element.scrollHeight > element.clientHeight;
    //   console.log(isTextClamped(event.target));
    //   return isTextClamped;
    // },
    handleClickDropdownButton(status) {
      this.dropdownStatus = status;
    },

    handleClickOutsideDropdownButton(status) {
      this.dropdownStatus = status;
    },

    handleMouseEnterItem() {
      this.hoverStatus = true;
    },

    handleMouseLeaveItem() {
      this.hoverStatus = false;
    },

    handleActiveItemChange(newActiveValue) {
      this.dropdownButtonActiveValue = newActiveValue;
    },
  },
};
</script>
