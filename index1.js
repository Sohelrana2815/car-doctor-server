/**
 * install
 */

jwt = require("jsonwebtoken");

app.get("/services");

{
  app.post("/jwt", async (req, res) => {
    const user = req.body;
    console.log(user);
    res.send(user);
  });
}
