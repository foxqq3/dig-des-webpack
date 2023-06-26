import createElement from '@/js/helpers.js';
import '@/js/register.js';
import addItemTitle from '@/js/components/project-item/sub-components/item-title.js';
import addItemDescription from '@/js/components/project-item/sub-components/item-description.js';
import addBrowseButton from '@/js/components/additional-components/browse-button.js';

export default function addProjectItem(itemInfo) {
  const projectItem = createElement('div', { className: 'item' });
  const info = createElement('div', { className: 'item__info' });
  const browseList = ['Редактировать', 'Удалить'];

  projectItem.appendChild(info);
  info.appendChild(addItemTitle(itemInfo));
  info.appendChild(addItemDescription(itemInfo));

  projectItem.appendChild(addBrowseButton(browseList));
  projectItem
    .querySelector('.dropdown-list__item[name="Удалить"]')
    .classList.add('dropdown-list__item_error');

  return projectItem;
}
