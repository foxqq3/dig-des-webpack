import addDropdown from '@/js/events/switchers/add-dropdown.js';
import addSwitchMenu from '@/js/events/switchers/add-switch-menu.js';
import requestsButtons from '@/js/events/requests-buttons';

export default function addEvents() {
  const app = document.querySelector('#app');

  app.addEventListener('click', (event) => {
    const element = event.target;
    addDropdown(element);
    addSwitchMenu(element);
    requestsButtons(element);
  });
}
