import createElement from '@/js/helpers.js';
import '@/js/register.js';
import addItemTitle from '@/js/components/project-item/sub-components/item-title.js';
import addItemDescription from '@/js/components/project-item/sub-components/item-description.js';
import addCurrentAvatar from '@/js/components/additional-components/current-avatar.js';
import addBrowseButton from '@/js/components/additional-components/browse-button.js';

export default function addTaskItem(itemInfo) {
  const taskItem = createElement('div', { className: 'item' });
  const info = createElement('div', { className: 'item__info' });
  const state = createElement('span', {
    className: 'status status_bronze',
    textContent: 'Черновик',
  });
  const browseList = ['Редактировать', 'Удалить'];

  taskItem.appendChild(info);
  info.appendChild(addItemTitle(itemInfo));
  info.appendChild(addItemDescription(itemInfo));

  info.querySelector('.item__name-wrapper').appendChild(addCurrentAvatar());
  info.querySelector('.item__description-wrapper').appendChild(state);

  taskItem.appendChild(addBrowseButton(browseList));
  taskItem
    .querySelector('.dropdown-list__item[name="Удалить"]')
    .classList.add('dropdown-list__item_error');

  return taskItem;
}