export default function createProject() {
  const xhr = new XMLHttpRequest();
  const requestUrl = `http://45.12.239.156:8081/api/projects`;
  xhr.open('POST', requestUrl);
  xhr.responseType = 'json';
  xhr.setRequestHeader('authorization', `Bearer ${localStorage.getItem('token')}`);
  xhr.setRequestHeader('Content-Type', 'application/json');

  const data = {
    name: 'Первое название',
    code: 'Первый код',
  };

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
      localStorage.setItem('_id-project', xhr.response._id);
      localStorage.setItem('_id-author', xhr.response.author);
    } else {
      console.log(`Возникла ошибка ${xhr.status} ${xhr.statusText} `);
    }
  };

  xhr.send(JSON.stringify(data));
}
