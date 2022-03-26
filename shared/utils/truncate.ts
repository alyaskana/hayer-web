export const truncate = (str: string, num: number) => {
  if (str.length > num) {
    return str.slice(0, num).trim().replace(/\,$/, "") + "...";
  } else {
    return str;
  }
};
