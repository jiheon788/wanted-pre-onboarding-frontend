class Token {
  public getToken(key: string) {
    return localStorage.getItem(key);
  }

  public setToken(key: string, token: string) {
    localStorage.setItem(key, token);
  }

  public removeToken(key: string) {
    localStorage.removeItem(key);
  }
}

const token = new Token();
export default token;
