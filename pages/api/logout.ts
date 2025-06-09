import { withIronSessionApiRoute } from "iron-session/next";
import { axios } from "lib/axios";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    await axios.get("/auth/logout");
    req.session.destroy();
    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    res.status(500).json({ message: (error as any)?.response?.data.message });
  }
}

export default withIronSessionApiRoute(logoutRoute, sessionOptions);
