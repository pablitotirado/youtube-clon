export default class Http {
  query = 'https://www.googleapis.com/youtube/v3/';
  queryUserInfo = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json';
  token;
  requestOptions = {
    Authorization: `Bearer ${this.token}`
  };

  async getSearch(terms) {
    const request = await fetch(
      `${this.query}search?part=snippet&q=${terms}`,
      this.requestOptions
    );
    const response = await request.json();
    return response;
  }

  async getUserInfo(token) {
    const request = await fetch(this.queryUserInfo, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const response = await request.json();
    return response;
  }
}

//Get profile user from access token callback youtube data api
//https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=ya29.a0AfH6SMC9BkLCPZTJmxNyO7OSiLlmzJLC0P8N3pmpJIWsH_-YHMssNaNn2_BCq0N9okoPD4JC03zXWdTyv6dllSwSyAQE0wyFxNxBF_8YOSva1gwho8LBy02cY0fLNnUN8neVnvJULn2PcUcMJdV7Xvo3M4R_L3lcLeA
