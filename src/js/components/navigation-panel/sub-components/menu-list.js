import createElement from '@/js/helpers.js';

export default function addMenuList(menuItems) {
  const ulList = createElement('ul', { className: 'navigation-panel__menu' });

  menuItems.map((item) => {
    const liItem = createElement('li');
    const aLink = createElement('a', {
      className: 'navigation-panel__menu-item',
      textContent: item.name,
      href: item.href,
    });
    liItem.appendChild(aLink);

    return ulList.appendChild(liItem);
  });

  return ulList;
}
