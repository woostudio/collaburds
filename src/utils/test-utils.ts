import kebabCase from 'lodash/kebabCase';

export const mapObjectToAttrs = ( object, enforceKebab = false ) => {
  if ( typeof object === 'object') {
    return Object.entries(object).map(([key, val]) => {
      let newKey = enforceKebab ? kebabCase(key) : key
      let newVal = val
      
      if ( typeof val === 'object' || Array.isArray(val) ) {
        newVal = JSON.stringify(val)
        return `${newKey}='${newVal}'`
      }

      if ( typeof val === 'boolean' && val ) {
        return newKey
      } else if ( typeof val === 'boolean' && !val ) {
        // Do not return attribute for false value
      }

      return `${newKey}="${newVal}"`
    }).join(' ')
  }
}