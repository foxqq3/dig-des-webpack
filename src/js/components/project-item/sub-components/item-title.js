import createElement from '@/js/helpers.js';

export default function addItemTitle(itemInfo) {

  const nameWrapper = createElement('div', { className: 'item__name-wrapper' });
  const name = createElement('span', {
    className: 'item__name',
    textContent: itemInfo.title,
    title: itemInfo.title,
  });

  nameWrapper.appendChild(name);
  return nameWrapper;
}
