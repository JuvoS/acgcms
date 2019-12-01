const { hostname, port, protocol } = window.location;
const restUrl =
  process.env.NODE_ENV === "production"
    ? `${protocol}//${hostname}:${port}/`
    : `http://127.0.0.1:7366`;

export default {
  projectName: "ACG CMS",
  copyright: "© 2019 All Rights Reserved ACG CMS",
  enableAuth: false,

  http: {
    baseURL: restUrl,
    timeout: 10 * 1000,
    noToken: false,
    showSpin: true
  }
};
