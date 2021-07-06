const express = require("express");
const foodModel = require("../models/form");
const path = require('path');
const app = express();

app.get("/forms", async (request, response) => {
  const forms = await foodModel.find({});

  try {
    response.send(forms);
  } catch (error) {
    response.status(500).send(error);
  }
});


// ...

app.post("/form", async (request, response) => {
  const food = new foodModel(request.body);

  try {
    await food.save();
    //response.send(food);
    //response.send("Name saved to database");
    response.sendFile(path.join(__dirname, '/thanksForSending.html'));
     
  } catch (error) {
    response.status(500).send(error);
  }
});

// ...


// ...

app.patch("/form/:id", async (request, response) => {
  try {
    await formModel.findByIdAndUpdate(request.params.id, request.body);
    await formModel.save();
    response.send(form);
  } catch (error) {
    response.status(500).send(error);
  }
});

// ...


// ...

app.delete("/form/:id", async (request, response) => {
  try {
    const form = await formModel.findByIdAndDelete(request.params.id);

    if (!form) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

// ...



module.exports = app;