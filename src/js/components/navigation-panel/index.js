import createElement from "@/js/helpers.js";
import "@/js/register.js";

export const navigationPanel = createElement("div", {
  id: "navigationPanel",
  innerHTML: `<header class="navigation-panel">
  <nav>
    <ul class="navigation-panel__menu">
      <li><a href="#" class="navigation-panel__menu-item">Проекты</a></li>
      <li><a href="#" class="navigation-panel__menu-item">Задачи</a></li>
      <li><a href="#" class="navigation-panel__menu-item">Пользователи</a></li>
    </ul>
  </nav>
  <button class="navigation-panel__button-user">
    <div class="avatar" active>
      <img class="avatar__image" src="/img/photo/travolta.jpg" alt="Аватар пользователя">
    </div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13.95L7.04999 9L5.63599 10.414L12 16.778L18.364 10.414L16.95 9L12 13.95Z" fill="currentColor" />
    </svg>
  </button>
</header>`,
});
