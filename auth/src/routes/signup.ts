import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { BadRequesteError,validateRequest } from '@dinotickets/common';
import { User } from '../models/user';

const router = express.Router();

router.post(
  '/api/user/signup',
  [
    body('email').isEmail().withMessage('Provide a valid Email'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {    
      const { email, password } = req.body;      
      const existingUser = await User.findOne({ email });      
      if (existingUser) {
        throw new BadRequesteError('Email already in use');
      }
      const user = User.build({ email, password });      
      await user.save();
      const userJwt = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_KEY!
      );
      req.session = {
        jwt: userJwt,
      };
      res.status(201).send({ signupSuccess: 'true', user });
  }
);

export { router as signupRouter }
