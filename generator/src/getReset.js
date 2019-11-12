const viewResetStyle = `display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;overflow:hidden;-webkit-overflow-scrolling:touch;align-self:stretch;flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-shrink:0;max-width:100%;box-sizing:border-box`
const textResetStyle = ``

const rootResetStyle = `${viewResetStyle};max-height:100vh`

export function baseReset(generateClassName) {
  const viewClassName = generateClassName('view')
  const textClassName = generateClassName('text')

  return `.${viewClassName}{${viewResetStyle}}.${textClassName}{${textResetStyle}}`
}

export function rootReset(rootNode = 'body') {
  return `${rootNode}{${rootResetStyle}}`
}
