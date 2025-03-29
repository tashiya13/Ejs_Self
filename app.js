const express = require('express');
const app = express();
const port = 3000;

// Set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Optional: Specify the folder where the views are stored

app.get('/', (req, res) => {
  let siteName = 'adidas';
  let searchText = 'Search Now';
  
  // Render the EJS file 'app.ejs' located in the 'views' directory
  res.render("app", { siteName: siteName, searchText: searchText });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




