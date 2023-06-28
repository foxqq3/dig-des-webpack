import createElement from '@/js/helpers.js';

export default function addProject() {
  const buttonCreateXhr = createElement('button', {
    className: 'button  button_primary_default js-create-project-xhr',
    textContent: 'Создать проект Xhr',
  });
  const buttonCreateFetch = createElement('button', {
    className: 'button  button_primary_default js-create-project-fetch',
    textContent: 'Создать проект Fetch',
  });
  const buttonCreateAxios = createElement('button', {
    className: 'button  button_primary_default js-create-project-axios',
    textContent: 'Создать проект Axios',
  });
  const buttonGetXhr = createElement('button', {
    className: 'button  button_primary_default js-get-project-xhr',
    textContent: 'Получить проект Xhr',
  });
  const buttonGetFetch = createElement('button', {
    className: 'button  button_primary_default js-get-project-fetch',
    textContent: 'Получить проект Fetch',
  });
  const buttonGetAxios = createElement('button', {
    className: 'button  button_primary_default js-get-project-axios',
    textContent: 'Получить проект Axios',
  });
  const buttonSetXhr = createElement('button', {
    className: 'button  button_primary_default js-set-project-xhr',
    textContent: 'Редактировать проект Xhr',
  });
  const buttonSetFetch = createElement('button', {
    className: 'button  button_primary_default js-set-project-fetch',
    textContent: 'Редактировать  проект Fetch',
  });
  const buttonSetAxios = createElement('button', {
    className: 'button  button_primary_default js-set-project-axios',
    textContent: 'Редактировать проект Axios',
  });
  const buttonDelXhr = createElement('button', {
    className: 'button  button_primary_default js-del-project-xhr',
    textContent: 'Удалить проект Xhr',
  });
  const buttonDelFetch = createElement('button', {
    className: 'button  button_primary_default js-del-project-fetch',
    textContent: 'Удалить проект Fetch',
  });
  const buttonDelAxios = createElement('button', {
    className: 'button  button_primary_default js-del-project-axios',
    textContent: 'Удалить проект Axios',
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
