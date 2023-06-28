export default function createTask() {
  const xhr = new XMLHttpRequest();
  const requestUrl = `http://45.12.239.156:8081/api/tasks`;
  xhr.open('POST', requestUrl);
  xhr.responseType = 'json';
  xhr.setRequestHeader('authorization', `Bearer ${localStorage.getItem('token')}`);
  xhr.setRequestHeader('Content-Type', 'application/json');

  const data = {
    name: 'Имя первой задачи',
    description: 'Описание первой задачи',
    projectId: localStorage.getItem('_id-project'),
    executor: localStorage.getItem('_id-author'),
  };

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
      localStorage.setItem('_id-task', xhr.response._id);
    } else {
      xhr.response;
    }
  };

  xhr.send(JSON.stringify(data));
}
