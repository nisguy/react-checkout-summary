import { PROMO_CODE } from "./types";

export const handleChange = e => {
  return {
    type: PROMO_CODE,
    value: e.target.value
  };
};
