module.exports = {
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
    cPORT:4000,
    baseURL : "http://localhost:" + this.cPORT
  };
