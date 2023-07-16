<template>
  <div class="pagination">
    <div class="pagination__navigation">
      <div class="pagination__navigation-buttons">
        <VButton
          svgName="arrow-back"
          isSmall
          :disabled="current === 1"
          theme="secondary"
          @onClick="handleBackPageClick"
        ></VButton>
        <VButton
          v-for="item in pagination"
          :key="item"
          :text="String(item)"
          isSmall
          :theme="item === current ? 'primary' : 'secondary'"
          :isNoneEvents="item === '...'"
          @onClick="handleNumberPageClick(item)"
        ></VButton>
        <VButton
          svgName="arrow-next"
          isSmall
          :disabled="current === total"
          theme="secondary"
          @onClick="handleNextPageClick"
        ></VButton>
      </div>
      <div class="pagination__navigation-input">
        <label for="numberPage" class="pagination__navigation-input-label">
          Перейти к странице
        </label>
        <div class="pagination__navigation-input-wrapper">
          <VInput
            type="number"
            id="numberPage"
            placeholder=""
            :value="inputValue"
            @pressEnter="handleInputEnter"
            @change="handelInputChange"
            @blur="handleBlur"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";

export default {
  name: "Pagination",

  components: {
    VButton,
    VInput,
  },

  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      total: this.totalPages,
      current: this.currentPage,
      inputValue: "",
    };
  },

  computed: {
    pagination() {
      let delta = null;

      const getRange = (start, end) => {
        return Array(end - start + 1)
          .fill()
          .map((v, i) => i + start);
      };

      if (this.total <= 7) {
        delta = 7;
      } else {
        delta = this.current > 4 && this.current < this.total - 3 ? 2 : 4;
      }

      let range = {
        start: Math.round(this.current - delta / 2),
        end: Math.round(this.current + delta / 2),
      };

      if (range.start - 1 === 1 || range.end + 1 === this.total) {
        range.start += 1;
        range.end += 1;
      }

      let pages =
        this.current > delta
          ? getRange(
              Math.min(range.start, this.total - delta),
              Math.min(range.end, this.total)
            )
          : getRange(1, Math.min(this.total, delta + 1));

      const withDots = (value, pair) =>
        pages.length + 1 !== this.total ? pair : [value];

      if (pages[0] !== 1) {
        pages = withDots(1, [1, "..."]).concat(pages);
      }

      if (pages[pages.length - 1] < this.total) {
        pages = pages.concat(withDots(this.total, ["...", this.total]));
      }
      return pages;
    },
  },

  watch: {
    current: function (value) {
      this.$emit("onPageChange", value);
      console.log(value);
    },
  },

  methods: {
    handleNumberPageClick(value) {
      if (this.current !== value) {
        this.current = value;
      }
    },

    handleInputEnter(target) {
      let value = target.value;
      target.blur();

      if (value > this.total) this.current = this.total;

      if (value < 1) this.current = 1;

      if (value >= 1 && value <= this.total) this.current = Number(value);

      this.inputValue = "";
    },

    handelInputChange(value) {
      this.inputValue = value;
    },

    handleBlur() {
      this.inputValue = "";
    },

    handleBackPageClick() {
      this.current -= 1;
    },

    handleNextPageClick() {
      this.current += 1;
    },
  },
};
</script>

<style></style>
