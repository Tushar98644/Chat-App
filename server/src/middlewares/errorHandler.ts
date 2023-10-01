  export const error = (err:any, req: any, res:any, next: any) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  };
  
  // Handle unhandled promise rejections
  export const unhandledRejection = (reason: any, promise: any) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  };
  
  // Handle uncaught exceptions
  export const uncaughtException= (error: any) => {
    console.error('Uncaught Exception:', error);
    process.exit(1); // Exit with error code
  };