import createElement from '@/js/helpers.js';
import '@/js/register.js';

export default function addNoneItem(typeItem) {
  const noneItem = createElement('div', { className: 'none-item' });
  const noneItemTitle = createElement('span', {
    className: 'none-item__title',
    textContent: typeItem.title,
  });

  noneItem.appendChild(noneItemTitle);

  if (typeItem.button === true) {
    const button = createElement('button', {
      className: 'button  button_primary',
      textContent: 'Добавить',
    });
    noneItem.appendChild(button);
  }

  return noneItem;
}
