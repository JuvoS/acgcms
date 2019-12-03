const { hostname, port, protocol } = window.location;
const baseUrl =
  process.env.NODE_ENV === "production"
    ? `${protocol}//${hostname}:${port}/`
    : `http://127.0.0.1:7366`;

export default {
  projectName: "ACG CMS",
  copyright: "© 2019 All Rights Reserved ACG CMS",
  enableAuth: false,

  http: {
    baseURL: baseUrl,
    noToken: false,

    timeout: 10 * 1000
  },
  restURL: "http://127.0.0.1:" + "6321"
};
