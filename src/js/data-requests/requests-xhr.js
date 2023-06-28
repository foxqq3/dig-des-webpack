import fixUrl from '@/js/data-requests/fix-url.js';

export default function requestsXhr(method, type, data) {
  const xhr = new XMLHttpRequest();
  if (method === 'PUT') {
    data._id = localStorage.getItem(`_id-${type}`);
  }

  if ((method === 'POST' || method === 'PUT') && type === 'tasks') {
    data.projectId = localStorage.getItem('_id-projects');
  }

  xhr.open(`${method}`, fixUrl(method, type));
  xhr.responseType = 'json';
  xhr.setRequestHeader('authorization', `Bearer ${localStorage.getItem('token')}`);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = () => {
    if (xhr.status === 200) {
      if (method === 'POST') {
        localStorage.setItem(`_id-${type}`, xhr.response._id);
      }
      console.log(xhr.response);
    } else {
      console.log(`Возникла ошибка ${xhr.status} ${xhr.statusText} `);
    }
  };

  if (method === 'GET' || method === 'DELETE') {
    xhr.send();
  } else {
    xhr.send(JSON.stringify(data));
  }
}
