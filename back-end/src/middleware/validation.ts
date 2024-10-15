import { Request, Response, NextFunction, RequestHandler } from "express";
import { body, validationResult, ValidationChain } from "express-validator";

// Handles validation errors
const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

// Export validation rules with ValidationChain type
const userValidationRules: ValidationChain[] = [
  body("name").isString().notEmpty().withMessage("Name is required"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("Address line 1 is required"),
  body("city").isString().notEmpty().withMessage("City is required"),
  body("country").isString().notEmpty().withMessage("Country is required"),
];

// Combine all middlewares into an array
export const validateMyUserRequest: RequestHandler[] = [
  ...userValidationRules,
  handleValidationErrors,
];
