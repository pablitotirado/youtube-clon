export default class Http {
  query = 'https://www.googleapis.com/youtube/v3/';
  token = localStorage.getItem('access_token');
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
}
0