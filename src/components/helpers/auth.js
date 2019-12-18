export const clientAuth = {
  isAuthenticated: false,

  authentication(cb) {
    clientAuth.isAuthenticated = true;
    localStorage.setItem("isAuthenticated", this.isAuthenticated);
    setTimeout(cb, 100);
  },
  logout(cb) {
    clientAuth.isAuthenticated = false;
    localStorage.removeItem("isAuthenticated");
    setTimeout(cb, 100);
  }
};
