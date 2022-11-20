class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _getFetch(pathUrl) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  _patchFetch(pathUrl, bodyConstructor) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'PATCH',
      headers: this._headers,
      body: bodyConstructor,
    }).then((res) => this._getResponseData(res));
  }

  _postFetch(pathUrl, bodyConstructor) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'POST',
      headers: this._headers,
      body: bodyConstructor,
    }).then((res) => this._getResponseData(res));
  }

  _deleteFetch(pathUrl) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  _putFetch(pathUrl) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  getProducts() {
    return this._getFetch('/products');
  }

  addProducts(data) {
    return this._postFetch(
      '/products',
      JSON.stringify({
        name: data.name,
        link: data.link,
      })
    );
  }
}

export const api = new Api('http://localhost:3001/api', {
  'Content-Type': 'application/json',
  'credentials': 'include',
});
