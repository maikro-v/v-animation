/**
 * 生成指定范围的随机数
 * @param min 最小数
 * @param max 最大数
 * @returns {number} 返回一个在最小数与最大数之间的随机数
 */
export function randomNum(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min)
}

/**
 * 变量类型解析
 * @param val 需要解析的值
 * @returns { string } 返回类型
 */
export function parseType(val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

/**
 * 判断是否字符串类型
 * @param val
 * @returns {boolean}
 */
export function isString(val) {
  if (val === undefined) {
    return false
  }
  return Object.prototype.toString.call(val).slice(8, -1) === 'String'
}

/**
 * 判断是否数组类型
 * @param val
 * @returns {boolean}
 */
export function isArray(val) {
  if (val === undefined) {
    return false
  }
  return Object.prototype.toString.call(val).slice(8, -1) === 'Array'
}

/**
 * 判断是否对象类型
 * @param val
 * @returns {boolean}
 */
export function isObject(val) {
  if (val === undefined) {
    return false
  }
  return Object.prototype.toString.call(val).slice(8, -1) === 'Object'
}
