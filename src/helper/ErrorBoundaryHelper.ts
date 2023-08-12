export const logError = (error: Error, info: { componentStack: string }): void => {
  console.log("Error: ", Error);
  console.log("Stack: ", info);
};
