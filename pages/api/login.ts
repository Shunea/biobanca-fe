import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { loginWithEmailAndPassword } from "@/features/auth/api/login";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = await req.body;

  try {
    const response = await loginWithEmailAndPassword({
      username,
      password,
    });

    req.session.user = response.data.user;
    await req.session.save();

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).json({ message: (error as any)?.response?.data.message });
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
