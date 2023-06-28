export default function fixUrl(method, type) {
  let requestUrl = '';
  let id = localStorage.getItem(`_id-${type}`);

  if (method === 'GET' || method === 'DELETE') {
    requestUrl = `http://45.12.239.156:8081/api/${type}/${id}`;
  } else {
    requestUrl = `http://45.12.239.156:8081/api/${type}`;
  }
  return requestUrl
}
