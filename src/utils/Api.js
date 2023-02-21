import { backendUrl } from '../constants';

class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _fetch({ url, method = 'POST', data }) {
    return fetch(`${this._baseUrl}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
      ...(!!data && { body: JSON.stringify(data) }),
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject({ error: `Ошибка: ${res.status}`, message: res });
      }
      return res.json();
    });
  }

  _fetchFormData({ url, product }) {
    return fetch(`${this._baseUrl}${url}`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      ...(!!product && { body: product }),
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject({ error: `Ошибка: ${res.status}`, message: res });
      }
      return res.json();
    });
  }

  getProducts() {
    return this._fetch({
      url: 'products',
      method: 'GET',
    });
  }

  addProducts(data) {
    const formData = new FormData();
    formData.append('image', data.image);
    formData.append('mainProduct', data.mainProduct);
    formData.append('nameProduct', data.nameProduct);
    formData.append('type', data.type);
    formData.append('desc', data.desc);
    formData.append('price', data.price);

    return this._fetchFormData({
      url: 'products',
      product: formData,
    });
  }

  loginAdmin(data) {
    return this._fetch({
      url: 'admin/login',
      data: {
        name: data.name,
        password: data.password,
      },
    });
  }

  checkTokenAdmin() {
    return this._fetch({
      url: 'admin/login',
      method: 'GET',
    });
  }

  logout() {
    return this._fetch({
      url: 'admin/logout',
      method: 'DELETE',
    });
  }
}

export const api = new Api(`${backendUrl.deploy}/api/`, {
  'Content-Type': 'application/json',
});
