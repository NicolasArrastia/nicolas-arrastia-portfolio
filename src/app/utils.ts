export const getInitials = (str: string, n: number = 2): string => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .slice(0, n)
    .join("");
};
