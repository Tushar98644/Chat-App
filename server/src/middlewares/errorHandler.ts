import { NextFunction, Request, Response } from "express";

  export const error = (err:Error, req: Request, res:Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  };
  
  // Handle unhandled promise rejections
  export const unhandledRejection = (reason: any, promise: any ) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  };
  
  // Handle uncaught exceptions
  export const uncaughtException= (error: Error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1); // Exit with error code
  };