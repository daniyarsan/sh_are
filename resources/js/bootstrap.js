import axios from 'axios';
// import Cookies from 'js-cookie';
window.axios = axios;

// const csrfToken = Cookies.get('XSRF-TOKEN');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.common['X-XSRF-TOKEN'] = csrfToken;
