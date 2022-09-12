// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@utils/prisma";

type Response = {
  msg: string;
};

// POST add score
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const { score } = req.body;
    if (!score) {
      res.status(400).json({ msg: "missing score" });
      return;
    }
    await prisma.score.create({ data: { score: score } });
    res.status(200).json({ msg: "added score (without identifying data)" });
  } catch (err: any) {
    res.status(200).json({ msg: `Error ${err}` });
  }
}
