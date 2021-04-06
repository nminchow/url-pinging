const axios = require('axios');
const fs = require('fs');

const data = fs.readFileSync('urls.txt', 'UTF-8');

// split the contents by new line
const urls = data.split(/\r?\n/).filter(x => x);

urls.map(url => {
  axios.get(url)
  .then(response => {
    // You could also write to a file here, if that would be desirable.
    // Note that you are in a `map` loop, so you will need to write to the file
    // and ensure you get all of the responses before you close it.
    console.log(url, response.headers['content-type'] == 'image/gif');
  })
  .catch(error => {
    console.log(error);
  });
});
