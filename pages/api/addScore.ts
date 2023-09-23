// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "@utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  msg: string;
};

// POST add score
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const { score, values } = req.body;
    if (!score) {
      return res.status(400).json({ msg: "missing score" });
    }
    if (!values) {
      return res.status(400).json({ msg: "missing values" });
    }
    try {
      await addDoc(collection(db, "scores"), {
        score,
      });
      // await addDoc(collection(db, "values"), {
      //   values,
      // });
      return res
        .status(200)
        .json({ msg: "added score (without identifying data)" });
    } catch (e) {
      return res.status(500).json({ msg: `Error ${e}` });
    }
  } catch (err: unknown) {
    return res.status(500).json({ msg: `Error ${err}` });
  }
}
