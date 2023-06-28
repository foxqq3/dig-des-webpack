export default function addToken() {
  const requestUrl = `http://45.12.239.156:8081/api/login`;
  const authorizationData = {
    login: 'rozhdestvensky.d',
    password: 'jc63fk',
  };

  const xhr = new XMLHttpRequest();

  xhr.open('POST', requestUrl);
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(authorizationData));

  xhr.onload = () => {
    if (xhr.status === 200) {
      localStorage.setItem('token', xhr.response.token);
    } else {
      console.log(`Возникла ошибка ${xhr.status} ${xhr.statusText} `);
    }
  };
}
