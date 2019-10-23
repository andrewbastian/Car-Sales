// we use constant variables instead of strings,
// which prevents hidden errors resulting from typos
export const BUY = "BUY";

// these are just pure functions that return predefined actions
export function buy() {
  return {
    type: BUY
  };
}
