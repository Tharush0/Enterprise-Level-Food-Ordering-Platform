import { auth } from "express-oauth2-jwt-bearer";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

declare global {
  namespace Express {
    interface Request {
      auth0Id: string;
      userId: string;
    }
  }
}

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.Auth0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});


export const jwtParse = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      res.status(401).json({ message: "Unauthorized" });
      return; // Ensure the function stops execution
    }

    const token = authorization.split(" ")[1];
    const decoded = jwt.decode(token) as jwt.JwtPayload | null;

    if (!decoded || !decoded.sub) {
      res.status(401).json({ message: "Invalid token" });
      return;
    }

    const user = await User.findOne({ auth0Id: decoded.sub });

    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    req.auth0Id = decoded.sub;
    req.userId = user._id.toString();

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Token verification failed" });
  }
};