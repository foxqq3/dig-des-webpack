import createElement from "@/js/helpers.js";
import "@/js/register.js";

export const taskItem = createElement("div", {
  id: "taskItem",
  innerHTML: `<div class="item">
  <div class="item__info">
    <div class="item__name-wrapper">
      <span class="item__name"
        title="Test is too long. Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. Test is too long. И еще раз очень длинное название проекта, создано специально чтоб проверить... Test is too long. Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. Test is too long. И еще раз очень длинное название проекта, создано специально чтоб проверить...">
        Test is too long. Очень длинное название проекта, создано специального для<br>
      </span>
      <div class="avatar">
        <img class="avatar__image" src="/img/photo/travolta.jpg" alt="Аватар пользователя">
      </div>
    </div>
    <div class="item__description">
      <div class="item__description-wrapper">
        <span class="item__number">#1</span>
        <span class="item__state">Иванов И.И. создал 1 час назад</span>
        <span class="status status_bronze">Черновик</span>
      </div>
      <span class="item__state">Баранов В.В. изменил 1 минуту назад</span>
    </div>
  </div>
  <button class="button button_secondary button_icon item__browse-button">
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5 17.5C13.5 17.8978 13.342 18.2794 13.0607 18.5607C12.7794 18.842 12.3978 19 12 19C11.6022 19 11.2206 18.842 10.9393 18.5607C10.658 18.2794 10.5 17.8978 10.5 17.5C10.5 17.1022 10.658 16.7206 10.9393 16.4393C11.2206 16.158 11.6022 16 12 16C12.3978 16 12.7794 16.158 13.0607 16.4393C13.342 16.7206 13.5 17.1022 13.5 17.5ZM13.5 12.5C13.5 12.8978 13.342 13.2794 13.0607 13.5607C12.7794 13.842 12.3978 14 12 14C11.6022 14 11.2206 13.842 10.9393 13.5607C10.658 13.2794 10.5 12.8978 10.5 12.5C10.5 12.1022 10.658 11.7206 10.9393 11.4393C11.2206 11.158 11.6022 11 12 11C12.3978 11 12.7794 11.158 13.0607 11.4393C13.342 11.7206 13.5 12.1022 13.5 12.5ZM13.5 7.5C13.5 7.89782 13.342 8.27936 13.0607 8.56066C12.7794 8.84196 12.3978 9 12 9C11.6022 9 11.2206 8.84196 10.9393 8.56066C10.658 8.27936 10.5 7.89782 10.5 7.5C10.5 7.10218 10.658 6.72064 10.9393 6.43934C11.2206 6.15804 11.6022 6 12 6C12.3978 6 12.7794 6.15804 13.0607 6.43934C13.342 6.72064 13.5 7.10218 13.5 7.5Z"
        fill="currentColor" />
    </svg>
  </button>
</div>`,
});


// const newElement = createElement("div", {
//   id: "content",
//   innerHTML: `
//     <ul class="some-class">
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//       <li>Item 4</li>
//       <li>Item 5</li>
//     </ul>
//   `,
// });
// document.body.appendChild(taskItem);
