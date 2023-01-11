import Items from "../../../models/ItemsSchema";

import dbConnect from "../../../db/connection";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await Items.find({});
        res.status(200).json({ success: true, data: data });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
        console.log(error);
      }

      break;

    case "POST":
      try {
        const data = await Items.create(req.body);
        res.status(201).json({ success: true, data: data });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
        console.log(error);
      }

      break;

  
    default:
      res.status(400).json({ success: false, error: "Invalid request method" });
  }
};
