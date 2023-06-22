import createElement from '@/js/helpers.js';
import '@/js/register.js';
import addItemTitle from '@/js/components/project-item/sub-components/item-title.js';
import addItemDescription from '@/js/components/project-item/sub-components/item-description.js';
import addCurrentAvatar from '@/js/components/additional-components/current-avatar.js';

export default function addTaskItem(itemInfo) {
  const projectItem = createElement('div', { className: 'item' });
  const info = createElement('div', { className: 'item__info' });
  const state = createElement('span', {
    className: 'status status_bronze',
    textContent: 'Черновик',
  });

  projectItem.appendChild(info);
  info.appendChild(addItemTitle(itemInfo));
  info.appendChild(addItemDescription(itemInfo));

  info.querySelector('.item__name-wrapper').appendChild(addCurrentAvatar());
  info.querySelector('.item__description-wrapper').appendChild(state);

  const button = createElement('button', {
    className: 'button button_secondary button_icon item__browse-button',
  });
  button.insertAdjacentHTML(
    'beforeend',
    `<div class="svg-icon__wrapper" style = "pointer-events: none;">
      <svg class="svg-icon">
        <use xlink:href="#browse"/>
      </svg>
    </div>`
  );
  projectItem.appendChild(button);

  return projectItem;
}
