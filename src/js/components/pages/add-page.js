//helper
import createElement from '@/js//helpers.js';
//components
import addNoneItem from '@/js/components/none-item/index.js';
import addNavigationPanel from '@/js/components/navigation-panel/index.js';
import addProjectItem from '@/js/components/project-item/index.js';
import addTaskItem from '@/js/components/task-item/index.js';
//variables for test
import { menuItems, itemInfo } from '@/js/test-variables.js';
//event functions
import addEvents from '@/js/events.js';

export default function addPage() {
  const app = document.querySelector('#app');

  const page = createElement('div', { className: 'page' });
  const sectionItmes = createElement('div', { className: 'page__section-items' });
  page.appendChild(addNavigationPanel(menuItems));
  page.appendChild(sectionItmes);
  sectionItmes.appendChild(addProjectItem(itemInfo));
  sectionItmes.appendChild(addTaskItem(itemInfo));
  sectionItmes.appendChild(
    addNoneItem({
      title: 'Не создан ни один проект',
      button: true,
    })
  );

  app.appendChild(page);

  addEvents();
}
