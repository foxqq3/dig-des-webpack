import createElement from '@/js/helpers.js';
import addMenuList from '@/js/components/navigation-panel/sub-components/menu-list.js';
import addProfileButton from '@/js/components/navigation-panel/sub-components/profile-button.js';

export default function addNavigationPanel(menuItems) {
  const navigationPanel = createElement('header', { className: 'navigation-panel' });
  const navWrapper = createElement('nav');

  navigationPanel.appendChild(navWrapper);
  navWrapper.appendChild(addMenuList(menuItems));
  navigationPanel.appendChild(addProfileButton());

  return navigationPanel;
}
