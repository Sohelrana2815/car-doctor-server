//get/read operations

const { ObjectId } = require("mongodb");

app.get("/bookings", async (req, res) => {
  const cursor = collection.find();
  const result = cursor.toArray();
  res.send(result);
});

//post operations

app.post("/bookings", async (req, res) => {
  const booking = req.body;
  console.log(booking);
  const result = collection.insertOne(booking);
  res.send(result);
});

// get/read specific

app.get("/services/:id", async (req, res) => {
  const id = req.params.body;
  const query = { _id: new ObjectId(id) };

  const options = {
    projection: {
      title: 1,
      price: 1,
      service_id: 1,
    },
  };

  const result = await collection.findOne(query, options);
  res.sen(result);
});
