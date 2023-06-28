//helper
import createElement from '@/js/helpers.js';
//components
import addNavigationPanel from '@/js/components/navigation-panel/index.js';
import addProject from '@/js/components/pages/add-project.js';
import addTask from '@/js/components/pages/add-task.js';

//variables for test
import { menuItems, itemInfo } from '@/js/test-variables.js';
//event functions
import addEvents from '@/js/events/events.js';

export default function addPage() {
  const app = document.querySelector('#app');

  const page = createElement('div', { className: 'page' });
  const sectionItmes = createElement('div', { className: 'page__section-items' });
  const spanProject = createElement('h2', {
    className: 'page__h2' ,
    textContent: 'Проекты',
  });
  const spanTask = createElement('h2', {
    className: 'page__h2',
    textContent: 'Задачи',
  });

  page.appendChild(addNavigationPanel(menuItems));
  page.appendChild(sectionItmes);

  sectionItmes.appendChild(spanProject);
  sectionItmes.appendChild(addProject());
  sectionItmes.appendChild(spanTask);
  sectionItmes.appendChild(addTask());

  app.appendChild(page);

  addEvents();
}
