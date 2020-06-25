import fetch from 'isomorphic-unfetch';

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = await response.json();
  throw error;
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

export default (url, params = {}) => {
  let token = null;
  if (typeof document !== 'undefined') {
    token = document.cookie.substring('token='.length);
  }
  const formattedParams = {
    ...params,
    body: params.body ? JSON.stringify(params.body) : null,
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
      ...params.headers,
    }
  };
  return fetch(process.env.SERVER_URL + url, formattedParams)
    .then(checkStatus)
    .then(parseJSON);
};
