import { NextApiRequest as Request, NextApiResponse as Response } from "next";
import { withSessionRoute } from "../../src/utils/session";

export default withSessionRoute(async (req: Request, res: Response) => {
  const { password } = await req.body;

  try {
    if (password === process.env.PASSWORD) {
      const user = { isLoggedIn: true };
      req.session.user = user;
      await req.session.save();
      res.json(user);
    } else {
      const user = { isLoggedIn: false };
      res.json(user);
    }
  } catch (error) {
    const { response } = error;
    res.status(response?.status || 500).json(error.data);
  }
});
