import Local from './Local';

let backendUrl;
if (process.env.BROWSER) {
  backendUrl = localStorage.getItem('backendUrl');
}
if (!backendUrl) {
  backendUrl = process.env.API_CLIENT_URL;
}

class Server {
  constructor() {
    this.FaildTypes = {
      INTERNET: 'INTERNET',
      SERVER: 'SERVER',
    };

    this.initialize();
  }
  
  static createHeaders = () => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return headers;
  };

  get userId() {
    return window.localStorage.getItem('userId');
  }

  set userId(userId) {
    window.localStorage.setItem('userId', userId);
  }

  get phoneNumber() {
    return window.localStorage.getItem('phoneNumber');
  }

  set phoneNumber(phoneNumber) {
    window.localStorage.setItem('phoneNumber', phoneNumber);
  }

  get serverAddress() {
    return `${backendUrl}/v2`;
  }

  get serverAddressV21() {
    return `${backendUrl}/v2.1`;
  }

  setBackendUrl(url = process.env.API_CLIENT_URL) {
    if (process.env.BROWSER) {
      localStorage.setItem('backendUrl', url);
    }
    backendUrl = url;
  }

  initialize() {
    this.aturizedHeader = Server.createHeaders();
    if (window.localStorage.getItem('token')) {
      this.setUserToken(window.localStorage.getItem('token'));
    }
  }

  setUserToken(token) {
    this.userToken = token;
    this.setTokenHeader();
  }

  setTokenHeader(headers) {
    const aturizedHeader = headers || this.aturizedHeader;
    if (aturizedHeader) {
      aturizedHeader.set('X-Authorization', this.userToken);
    }
  }

  removeToken() {
    this.userToken = null;
    this.aturizedHeader.delete('X-Authorization');
  }

  async fetchApi(url, options, headers = this.aturizedHeader) {
    let fetchOptions = {};
    if (options.headers) {
      fetchOptions = {
        mode: 'cors',
        cache: 'default',
        ...options,
      };
    } else {
      fetchOptions = {
        mode: 'cors',
        cache: 'default',
        ...options,
        headers,
      };
    }

    try {
      const response = await fetch(url, {
        ...fetchOptions,
      });
      const responseJson = await response.json();

      if (responseJson.result === 'OK') {
        return responseJson.data;
      }
      if (responseJson.data && responseJson.data.message) {
        if (responseJson.payload) {
          throw {
            ...responseJson.data,
            payload: responseJson.payload,
          };
        }
        throw responseJson.data;
      } else {
        throw {
          message: responseJson.data.message,
          code: responseJson.data.code || 'SERVER_UNKNOWN_ERROR',
        };
      }
    } catch (err) {
      if (err.code === 'EXPIRED_TOKEN') {
        localStorage.clear();
        window.location.reload();
      }
      if (err.code && err.message) {
        if (err.payload) {
          throw {
            code: err.code,
            message: err.message,
            payload: err.payload,
            api: `${options.method}${url.replace(this.serverAddress, '')}`,
          };
        }
        throw {
          code: err.code,
          message: err.message,
          api: `${options.method}${url.replace(this.serverAddress, '')}`,
        };
      }
      if (err.code === 'UNAUTHENTICATED_USER') {
        throw {
          code: err.code,
          message: Local.get(Local.items.INFO_WAS_DELETED),
          api: `${options.method}${url.replace(this.serverAddress, '')}`,
        };
      }
      if (err.code) {
        throw {
          code: err.code,
          message: Local.get(Local.items.SERVER_ERROR),
          api: `${options.method}${url.replace(this.serverAddress, '')}`,
        };
      }
      if (navigator && navigator.onLine) {
        throw {
          message: Local.get(Local.items.SERVER_ERROR),
          code: 'SERVER_CONNECTION_ERROR',
          api: `${options.method}${url.replace(this.serverAddress, '')}`,
        };
      } else {
        throw {
          message: Local.get(Local.items.INTERNET_ERROR),
          code: 'INTERNET_CONNECTION_ERROR',
          api: `${options.method}${url.replace(this.serverAddress, '')}`,
        };
      }
    }
  }

  isServerUp = () =>
    this.fetchApi(`${this.serverAddress}`, { method: 'GET' });
}

export default new Server();
