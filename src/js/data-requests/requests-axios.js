import axios from 'axios';
import fixUrl from '@/js/data-requests/fix-url.js';
export default function requestsAxios(method, type, info) {
  if (method === 'PUT') {
    info._id = localStorage.getItem(`_id-${type}`);
  }

  if ((method === 'POST' || method === 'PUT') && type === 'tasks') {
    info.projectId = localStorage.getItem('_id-projects');
  }

  axios({
    method: method,
    url: fixUrl(method, type),
    data: info,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then((responce) => {
      if (method === 'POST') {
        localStorage.setItem(`_id-${type}`, responce.data._id);
      }
      console.log(responce.data);
    })
    .catch((error) => console.log(error.message));
}
