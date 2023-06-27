import toggleMenu from '@/js/events/toggle-menu';

export default function addSwitchMenu(element) {
  if (
    element.closest('.navigation-panel__menu-item') &&
    !element.closest('.navigation-panel__menu-item_active')
  ) {
    let active = document.querySelector('.navigation-panel__menu-item_active');
    if (active !== null) {
      toggleMenu(active);
    }
    toggleMenu(element);
  }
}
