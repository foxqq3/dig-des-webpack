export default function delProject() {
  const xhr = new XMLHttpRequest();

  const id = localStorage.getItem('_id-project');
  const requestUrl = `http://45.12.239.156:8081/api/projects/${id}`;

  xhr.open('DELETE', requestUrl);
  xhr.responseType = 'json';
  xhr.setRequestHeader('authorization', `Bearer ${localStorage.getItem('token')}`);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.log(`Возникла ошибка ${xhr.status} ${xhr.statusText} `);
    }
  };

  xhr.send();
}
