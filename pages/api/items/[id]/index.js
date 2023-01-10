import Items from "./../../../../models/ItemsSchema";

import dbConnect from "./../../../../db/connection";

dbConnect();


export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const Details = await Items.findById(id);

        if (!Details) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: Details });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false, error: "Invalid request method" });
  }
};
