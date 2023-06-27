//helper
import createElement from '@/js/helpers.js';
//components
import addNavigationPanel from '@/js/components/navigation-panel/index.js';

//variables for test
import { menuItems, itemInfo } from '@/js/test-variables.js';
//event functions
import addEvents from '@/js/events/events.js';

export default function addPage() {
  const app = document.querySelector('#app');

  const page = createElement('div', { className: 'page' });
  const sectionItmes = createElement('div', { className: 'page__section-items' });

  page.appendChild(addNavigationPanel(menuItems));
  page.appendChild(sectionItmes);

  app.appendChild(page);

  addEvents();

  //Buttons////////////////////
  const button1 = createElement('button', {
    className: 'button  button_primary_default js-create',
    textContent: 'Создать XML',
  });
  const button2 = createElement('button', {
    className: 'button  button_primary_default js-get',
    textContent: 'Получить XML',
  });
  const button3 = createElement('button', {
    className: 'button  button_primary_default js-set',
    textContent: 'Редактировать XML',
  });
  const button4 = createElement('button', {
    className: 'button  button_primary_default js-del',
    textContent: 'Удалить XML',
  });
  sectionItmes.appendChild(button1);
  sectionItmes.appendChild(button2);
  sectionItmes.appendChild(button3);
  sectionItmes.appendChild(button4);
  ////////////////////////////////////////



}
