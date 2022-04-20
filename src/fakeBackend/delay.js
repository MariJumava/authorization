export const delay = async (ms) =>
  await new Promise((resolve) => setTimeout(resolve, ms));
console.log(delay);
