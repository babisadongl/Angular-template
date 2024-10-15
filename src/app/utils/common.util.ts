/**
 *
 * @param str :string // user defined
 * @returns any // returns JSON if value is present, else undefined
 */
export const parseStringToJSON = (str: string): any => {
  let result;
  if (str) {
    result = JSON.parse(str);
  }
  return result;
};

/**
 *
 * @param json : any // user defined
 * @returns string
 */
export const JSONToString = (json: any): string => {
  return json ? JSON.stringify(json) : '';
};
