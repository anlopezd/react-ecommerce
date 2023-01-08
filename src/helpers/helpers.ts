export const truncate = (name: string, letters = 40) =>
  name.length > 40 ? name.slice(0, letters) + "..." : name;
