import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const stations = async (req: NextApiRequest, res: NextApiResponse) => {
  const stations = await prisma.station.findMany();
  res.status(200).json(stations);
};

export default stations;
