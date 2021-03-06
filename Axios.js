const { default: axios } = require("axios");

// axios.post('/login', {
//     fName: 'abc',
//     lName: 'cba'
// })
//     .then((response) => {
//         console.log(response);
//     }, (error) => {
//         console.log(error);
//     });
// axios.get('https://api.github.com/users/mapbox')
// axios.get('https://github.com/prajapatisurj')
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });
axios.all([
  axios.get('https://api.github.com/users/mapbox'),
  axios.get('https://api.github.com/users/phantomjs')
])
.then(responseArr => {
  console.log('Date created: ', responseArr[0].data.created_at);
  console.log('Date created: ', responseArr[1].data.created_at);
});
