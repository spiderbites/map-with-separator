const map = require('lodash.map')

/*
 * Takes an object mapObj, to map with mapFunc. The reduce function
 * internally separates the mapped objects with separator. (No
 * separator at beginning or end.)
 *
 * separatorFunc is a function which takes an index as its argument
 * It is written this way so that the index can be used to insert a
 * unique key onto the separtor element.
 *
 * mapFunc is assumed to take args matching lodash's map function (val, key, index)
 */
export default function(mapObj, mapFunc, separatorFunc) {
  return _map(mapObj, mapFunc).reduce(
    (acc, element, index) =>
      acc ? [...acc, separatorFunc(index), element] : [element],
    null
  )
}
