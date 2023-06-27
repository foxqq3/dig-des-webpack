export default function setProject() {
  const xhr = new XMLHttpRequest();
  const requestUrl = `http://45.12.239.156:8081/api/projects`;
  xhr.open('PUT', requestUrl);
  xhr.responseType = 'json';
  xhr.setRequestHeader('authorization', `Bearer ${localStorage.getItem('token')}`);
  xhr.setRequestHeader('Content-Type', 'application/json');

  const data = {
    name: 'Второе название',
    code: 'Второй код',
    _id: localStorage.getItem('_id'),
  };

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      xhr.response;
    }
  };

  xhr.send(JSON.stringify(data));
}
