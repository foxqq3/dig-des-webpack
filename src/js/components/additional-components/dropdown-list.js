import createElement from '@/js/helpers.js';

export default function addDropdownList(listItems) {
  const wrapper = createElement("div", { className: 'dropdown-list' })
  const ulList = createElement('ul', { className: 'dropdown-list__wrapper' });

  listItems.map((name) => {
    const liItem = createElement('li');
    const aLink = createElement('a', {
      className: 'dropdown-list__item',
      textContent: name,
      name: name
    });

    liItem.appendChild(aLink);
    return ulList.appendChild(liItem);
  });

  wrapper.appendChild(ulList)

  return wrapper;

}
