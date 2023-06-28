import createElement from '@/js/helpers.js';

export default function addTask() {
  const buttonCreateXhr = createElement('button', {
    className: 'button  button_primary_default js-create-task-xhr',
    textContent: 'Создать задачу Xhr',
  });
  const buttonCreateFetch = createElement('button', {
    className: 'button  button_primary_default js-create-task-fetch',
    textContent: 'Создать задачу Fetch',
  });
  const buttonCreateAxios = createElement('button', {
    className: 'button  button_primary_default js-create-task-axios',
    textContent: 'Создать задачу Axios',
  });
  const buttonGetXhr = createElement('button', {
    className: 'button  button_primary_default js-get-task-xhr',
    textContent: 'Получить задачу Xhr',
  });
  const buttonGetFetch = createElement('button', {
    className: 'button  button_primary_default js-get-task-fetch',
    textContent: 'Получить задачу Fetch',
  });
  const buttonGetAxios = createElement('button', {
    className: 'button  button_primary_default js-get-task-axios',
    textContent: 'Получить задачу Axios',
  });
  const buttonSetXhr = createElement('button', {
    className: 'button  button_primary_default js-set-task-xhr',
    textContent: 'Редактировать задачу Xhr',
  });
  const buttonSetFetch = createElement('button', {
    className: 'button  button_primary_default js-set-task-fetch',
    textContent: 'Редактировать  задачу Fetch',
  });
  const buttonSetAxios = createElement('button', {
    className: 'button  button_primary_default js-set-task-axios',
    textContent: 'Редактировать задачу Axios',
  });
  const buttonDelXhr = createElement('button', {
    className: 'button  button_primary_default js-del-task-xhr',
    textContent: 'Удалить задачу Xhr',
  });
  const buttonDelFetch = createElement('button', {
    className: 'button  button_primary_default js-del-task-fetch',
    textContent: 'Удалить задачу Fetch',
  });
  const buttonDelAxios = createElement('button', {
    className: 'button  button_primary_default js-del-task-axios',
    textContent: 'Удалить задачу Axios',
  });

  const requestsWrapper = createElement('div', { className: 'page__requests-wrapper' });

  requestsWrapper.appendChild(buttonCreateXhr);
  requestsWrapper.appendChild(buttonCreateFetch);
  requestsWrapper.appendChild(buttonCreateAxios);

  requestsWrapper.appendChild(buttonGetXhr);
  requestsWrapper.appendChild(buttonGetFetch);
  requestsWrapper.appendChild(buttonGetAxios);

  requestsWrapper.appendChild(buttonSetXhr);
  requestsWrapper.appendChild(buttonSetFetch);
  requestsWrapper.appendChild(buttonSetAxios);

  requestsWrapper.appendChild(buttonDelXhr);
  requestsWrapper.appendChild(buttonDelFetch);
  requestsWrapper.appendChild(buttonDelAxios);

  return requestsWrapper;
}
