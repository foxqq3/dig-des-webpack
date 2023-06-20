import createElement from "@/js/helpers.js";
import "@/js/register.js";

export const noneItem = createElement("div", {
  id: "none-item",
  innerHTML: `<div class="none-item">
  <span class="item-none__title">Не создан ни один проект</span>
  <div class="button button_primary">Добавить</div>
  </div>
  `,
});
