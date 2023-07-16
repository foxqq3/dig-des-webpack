<template>
  <div class="pagination">
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
      :text="item"
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
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";

export default {
  name: "Pagination",

  components: {
    VButton,
  },

  props: {
    currentPage: {
      type: Number,
      default: null,
    },
    totalPages: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      total: this.totalPages,
      current: this.currentPage,
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

  methods: {
    handleNumberPageClick(value) {
      if (this.current !== value) {
        this.current = value;
      }
      console.log(value);
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
