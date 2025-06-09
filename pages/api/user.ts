import { AuthUser } from "@/features/auth/types";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function userRoute(req: NextApiRequest, res: NextApiResponse<AuthUser>) {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.json({
      id: 0,
      name: "",
      active: false,
      imsp: {
        id: 0,
        name: "",
        code: 0,
        createdAt: "",
      },
      lastname: "",
      phone: "",
      username: "",
      rol: "",
      iat: 0,
      exp: 0,
    });
  }
}

export default withIronSessionApiRoute(userRoute, sessionOptions);
