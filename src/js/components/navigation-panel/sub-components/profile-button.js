import '@/js/register.js';
import createElement from '@/js/helpers.js';
import addCurrentAvatar from '@/js/components/additional-components/current-avatar.js';
import addDropdownList from '@/js/components/additional-components/dropdown-list.js';

export default function addProfileButton() {
  const buttonWrapper = createElement('div', {
    className: 'navigation-panel__button-user-wrapper',
  });
  const button = createElement('button', { className: 'navigation-panel__button-user'});
  const buttonContent = createElement('div', {className: 'navigation-panel__button-user-content'})
  const dropdownList = ['Профиль', 'Выход'];

  button.setAttribute('data-browse','browse-profile');

  buttonWrapper.appendChild(button);
  button.appendChild(buttonContent);
  buttonContent.appendChild(addCurrentAvatar());
  buttonContent.insertAdjacentHTML(
    'beforeend',
    `<div class="svg-icon__wrapper">
      <svg class="svg-icon">
        <use xlink:href="#arrow-down"  />
      </svg>
    </div>`
  );
  buttonWrapper.appendChild(addDropdownList(dropdownList));
  return buttonWrapper;
}
