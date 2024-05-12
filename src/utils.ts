function parseStringToFloat(value: string): number {
  value = value.replace(/[^\d.,]/g, "");

  console.log("parseStringToFloat " + value);
  console.log("parseStringToFloat " + parseFloat(value));

  return parseFloat(value);
}

export default {
  parseStringToFloat,
};
