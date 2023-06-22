import createElement from '@/js/helpers.js';

export default function addItemDescription(itemInfo) {
  const description = createElement('div', { className: 'item__description' });
  const descriptionWrapper = createElement('div', {
    className: 'item__description-wrapper',
  });
  const number = createElement('span', {
    className: 'item__number',
    textContent: `#${itemInfo.number}`,
  });
  const stateChange = createElement('span', {
    className: 'item__state',
    textContent: `${itemInfo.name.creater} создал(а) ${itemInfo.time.create} назад`,
  });
  const stateCreate = createElement('span', {
    className: 'item__state',
    textContent: `${itemInfo.name.changer} создал(а) ${itemInfo.time.change} назад`,
  });

  description.appendChild(descriptionWrapper);
  descriptionWrapper.appendChild(number);
  descriptionWrapper.appendChild(stateChange);
  description.appendChild(stateCreate);
  return description;
}
