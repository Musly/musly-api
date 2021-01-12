function convertId(item) {
  if (item._id) {
    const {
      _id, __v, password, ...rest
    } = item

    return {
      id: _id,
      ...rest,
    }
  }

  return item
}

exports.cleanResponse = function cleanResponse(context) {
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
