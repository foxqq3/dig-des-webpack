import fixUrl from '@/js/data-requests/fix-url.js';

export default async function requestsFetch(method, type, data) {
  if (method === 'PUT') {
    data._id = localStorage.getItem(`_id-${type}`);
  }

  if ((method === 'POST' || method === 'PUT') && type === 'tasks') {
    data.projectId = localStorage.getItem('_id-projects');
  }

  try {
    const response = await fetch(fixUrl(method, type), {
      method: `${method}`,
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (method === 'POST') {
      localStorage.setItem(`_id-${type}`, json._id);
    }
    console.log(json);
  } catch (error) {
    throw new Error(`Возникла ошибка ${json.status} ${json.statusText}`);
  }
}
