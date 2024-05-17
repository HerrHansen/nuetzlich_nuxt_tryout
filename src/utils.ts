function parseStringToFloat(value: string): number {
  value = value.replace(/[^\d.,]/g, "");

  return parseFloat(value);
}

function fixFloat(value: number): number {
  return parseFloat(value.toFixed(2));
}

function calcPercentage(total: number, piece: number): number {
  const per = parseFloat(((piece / total) * 100).toFixed(2));
  return isNaN(per) ? 0 : per;
}

const utils = {
  parseStringToFloat,
  fixFloat,
  calcPercentage,
};

export default utils;
