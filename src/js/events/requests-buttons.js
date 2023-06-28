import testXhr from '@/js/data-requests/requests-xhr.js';
import requestsFetch from '@/js/data-requests/requests-fetch.js';
import requestsAxios from "@/js/data-requests/requests-axios.js";

let createProject = {
  name: 'Первое название',
  code: 'Первый код',
};

const setProject = {
  name: 'Второе название',
  code: 'Второй код',
};
let createTask = {
  name: 'Первое название',
  description: 'Первый код',
  executor: 'Здесь id исполнителя',
};

let setTask = {
  name: 'Измененная задача',
  description: 'Измененное описание',
  executorId: 'Здесь id нового исполнителя',
  status: 'IN_PROCESS',
};

export default function requestsButtons(element) {
  if (element.closest('.js-create-project-xhr')) {
    testXhr('POST', 'projects', createProject);
  } else if (element.closest('.js-get-project-xhr')) {
    testXhr('GET', 'projects');
  } else if (element.closest('.js-set-project-xhr')) {
    testXhr('PUT', 'projects', setProject);
  } else if (element.closest('.js-del-project-xhr')) {
    testXhr('DELETE', 'projects');
  } else if (element.closest('.js-create-task-xhr')) {
    testXhr('POST', 'tasks', createTask);
  } else if (element.closest('.js-get-task-xhr')) {
    testXhr('GET', 'tasks');
  } else if (element.closest('.js-set-task-xhr')) {
    testXhr('PUT', 'projects', setTask);
  } else if (element.closest('.js-del-task-xhr')) {
    testXhr('DELETE', 'tasks');
  } else if (element.closest('.js-create-project-fetch')) {
    requestsFetch('POST', 'projects', createProject);
  } else if (element.closest('.js-get-project-fetch')) {
    requestsFetch('GET', 'projects');
  } else if (element.closest('.js-set-project-fetch')) {
    requestsFetch('PUT', 'projects', setProject);
  } else if (element.closest('.js-del-project-fetch')) {
    requestsFetch('DELETE', 'projects');
  } else if (element.closest('.js-create-task-fetch')) {
    requestsFetch('POST', 'tasks', createTask);
  } else if (element.closest('.js-get-task-fetch')) {
    requestsFetch('GET', 'tasks');
  } else if (element.closest('.js-set-task-fetch')) {
    requestsFetch('PUT', 'projects', setTask);
  } else if (element.closest('.js-del-task-fetch')) {
    requestsFetch('DELETE', 'tasks');
  } else if (element.closest('.js-create-project-axios')) {
    requestsAxios('POST', 'projects', createProject);
  } else if (element.closest('.js-get-project-axios')) {
    requestsAxios('GET', 'projects');
  } else if (element.closest('.js-set-project-axios')) {
    requestsAxios('PUT', 'projects', setProject);
  } else if (element.closest('.js-del-project-axios')) {
    requestsAxios('DELETE', 'projects');
  } else if (element.closest('.js-create-task-axios')) {
    requestsAxios('POST', 'tasks', createTask);
  } else if (element.closest('.js-get-task-axios')) {
    requestsAxios('GET', 'tasks');
  } else if (element.closest('.js-set-task-axios')) {
    requestsAxios('PUT', 'projects', setTask);
  } else if (element.closest('.js-del-task-axios')) {
    requestsAxios('DELETE', 'tasks');
  }
}
