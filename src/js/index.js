import addPage from '@/js/components/pages/add-page.js';
import '@/scss/index.scss';

import dataRequests from '@/js/data-requests/add-data-requests.js';
import createProject from '@/js/data-requests/create-project-xhr.js';
import getProject from '@/js/data-requests/get-project-xhr.js';
import setProject from '@/js/data-requests/set-project-xhr.js';
import delProject from '@/js/data-requests/del-project-xhr.js';

import createTask from '@/js/data-requests/create-task-xhr';

addPage();

localStorage.clear();

const requestUrl = `http://45.12.239.156:8081/api/projects`;
const authorizationData = {
  login: 'rozhdestvensky.d',
  password: 'jc63fk',
};

//Token
dataRequests();

app.addEventListener('click', (event) => {
  const element = event.target;
  if (element.closest('.js-create')) {
    createProject();
  } else if (element.closest('.js-get')) {
    getProject();
  } else if (element.closest('.js-set')) {
    setProject();
  } else if (element.closest('.js-del')) {
    delProject();
  } else if (element.closest('.js-create-task')) {
    createTask();
  } else if (element.closest('.js-get-task')){
    
  }
});
