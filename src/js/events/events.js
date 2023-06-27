import addDropdown from '@/js/events/add-dropdown.js';
import addSwitchMenu from '@/js/events/add-switch-menu.js';

export default function addEvents() {
  const app = document.querySelector('#app');

  app.addEventListener('click', (event) => {
    const element = event.target;
    addDropdown(element);
    addSwitchMenu(element);
  });
}
