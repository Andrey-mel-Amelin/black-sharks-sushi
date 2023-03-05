import { backendUrl } from '../constants';
import { ProductForApi } from '../types/types';

class Api {
  constructor(public baseUrl: string, public headers: {}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _fetch({ url, method = 'POST', data }: { url: string; method?: string; data?: object }) {
    return fetch(`${this.baseUrl}${url}`, {
      method: method,
      headers: this.headers,
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

  _fetchFormData({ url, product }: { url: string; product: FormData }) {
    return fetch(`${this.baseUrl}${url}`, {
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

  addProducts(data: ProductForApi) {
    const formData = new FormData();
    formData.append('image', data.image!);
    formData.append('mainProduct', data.mainProduct === true ? 'true' : 'false');
    formData.append('nameProduct', data.nameProduct);
    formData.append('type', data.type);
    formData.append('desc', data.desc);
    formData.append('price', data.price);

    return this._fetchFormData({
      url: 'products',
      product: formData,
    });
  }

  loginAdmin(data: { name: string; password: string }) {
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
