import status from "http-status";

export function schemaValidation(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      return res.status(status.UNPROCESSABLE_ENTITY).json({
        errors: validation.error.details.map((error) => error.message),
      });
    }

    next(); 
  };
}
