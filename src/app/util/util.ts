
const objProToString = Object.prototype.toString;

export function isDate(value) { return objProToString.call(value) === '[object Date]'; }

export function isRegExp(value) { return objProToString.call(value) === '[object RegExp]'; }

export function isNumber(value) { return objProToString.call(value) === '[object Number]'; }

export function isString(value) { return objProToString.call(value) === '[object String]'; }

export function isBoolean(value) { return objProToString.call(value) === '[object Boolean]'; }

export function isObject(value) { return objProToString.call(value) === '[object Object]'; }

export function pick(data, extraKeys, ) {
  const newData = {};
  if (isString(extraKeys)) {
    Object.keys(data).forEach(function (key) {
      if (extraKeys.includes('**') || extraKeys.includes(key)) {
        newData[key] = key.endsWith('%') ? +data[key.substr(0, key.length - 1)] : data[key];
      }
      if (extraKeys.includes('-' + key)) {
        delete newData[key];
      }
    });
  } else if (isObject(extraKeys)) {
    Object.keys(data).forEach(function (key) {
      if (key in extraKeys || (arguments[2] && arguments[2].includes(key) && !arguments[2].includes('-' + key))) {
        newData[key] = key.endsWith('%') ? +data[key.substr(0, key.length - 1)] : data[key];
      }
    });
  }

  return newData;
}
