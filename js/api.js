const URLS = {
  'GET': 'https://26.javascript.pages.academy/kekstagram/data',
  'POST': 'https://26.javascript.pages.academy/kekstagram'
};

const sendRequest = (onSuccess, onError, method, body) => {
  fetch(
    URLS[method],
    {
      method: method,
      body: body,
    },
  )
    .then((responce) => responce.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};
export const loadData = (onSuccess, onError, method = 'GET') => sendRequest(onSuccess, onError, method);

export const uploadData = (onSuccess, onError, method = 'POST', body) => sendRequest(onSuccess, onError, method, body);
