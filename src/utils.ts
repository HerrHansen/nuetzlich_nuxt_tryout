function parseStringToFloat(value: string): number {
  value = value.replace(/[^\d.,]/g, "");

  return parseFloat(value);
}

function fixFloat(value: number): number {
  return parseFloat(value.toFixed(2));
}

function calcPercentage(total: number, piece: number): number {
  return parseFloat(((piece / total) * 100).toFixed(2));
}

const utils = {
  parseStringToFloat,
  fixFloat,
  calcPercentage,
};

export default utils;
