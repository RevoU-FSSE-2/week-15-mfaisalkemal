import { Express, Request } from "express";
const mongooseMorgan = require('mongoose-morgan');

export default async(app: Express) => {
  app.use(mongooseMorgan({
    connectionString: 'mongodb+srv://mfaisalkn:3X6eci36u2IxZGoL@mfkn.asv91rp.mongodb.net/?retryWrites=true&w=majority',
  }));
}
