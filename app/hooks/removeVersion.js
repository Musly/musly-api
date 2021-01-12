function convertId({ __v, ...rest }) {
  return rest
}

exports.removeVersion = function removeVersion(context) {
  if (context.data) {
    if (Array.isArray(context.data)) {
      context.data = context.data.reduce((acc, item) => ([
        ...acc,
        convertId(item),
      ]), [])
    } else {
      context.data = convertId(context.data)
    }
  }

  if (context.result && context.result.data) {
    context.result.data = context.result.data.reduce((acc, item) => ([
      ...acc,
      convertId(item),
    ]), [])
  } else {
    context.result = convertId(context.result)
  }

  return context
}
