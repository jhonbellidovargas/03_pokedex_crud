import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  // NODE_ENV: Joi.string().valid('dev', 'prod', 'test', 'stage').default('dev'),
  
  MONGODB: Joi.string().required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6),
});
