import {JSONToString, parseStringToJSON} from '.';

/**
 *
 * @param type : string // values='local','session'
 * @param key : string // user defined
 * @param value: string // desired object's property
 */
export const getStorage = (type: string, key: string, value?: string): any => {
  if (
    (type === 'local' && typeof localStorage !== 'undefined') ||
    (type === 'session' && typeof sessionStorage !== 'undefined')
  ) {
    let data: any = type === 'local' ? localStorage.getItem(key) : sessionStorage.getItem(key);
    data = parseStringToJSON(data);
    return value
      ? value.includes('.')
        ? data[value.split('.')[0]][value.split('.')[1]]
        : data[value]
      : data;
  }
  return '';
};

/**
 *
 * @param type : string // values='local','session'
 * @param key : string // user defined
 * @param value: any // user defined
 */
export const setStorage = (type: string, key: string, value: any): void => {
  if (type === 'local') {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSONToString(value));
    }
  } else {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(key, JSONToString(value));
    }
  }
};

/**
 *
 * @param type : string // values='local','session'
 */
export const clearStorage = (type: string): void => {
  if (type === 'local') {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  } else {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.clear();
    }
  }
};

/**
 *
 * @param type : string // values='local','session'
 * @param key : string // user defined
 */
export const removeStorage = (type: string, key: string): void => {
  if (type === 'local') {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    }
  } else {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem(key);
    }
  }
};
