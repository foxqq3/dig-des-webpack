import addPage from '@/js/components/pages/add-page.js';
import '@/scss/index.scss';
import dataRequests from '@/js/data-requests/add-data-requests.js';

addPage();


dataRequests().then((response) => {


  token = response.token;

  console.log(token);
});

app.addEventListener('click', (event) => {
  const element = event.target;
  if (element.closest('.js-create')) {

  }
});
