const app = require('../app.js');

const port = process.env.PORT || 1500;

app.listen(port, () => {
  console.log(`>>>>>>>>> listening on port ${port}`);
});