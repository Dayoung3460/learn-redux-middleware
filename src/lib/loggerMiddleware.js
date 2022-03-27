const loggerMiddleware = store => next => action => {
    // middleware basic structure
    console.group(action && action.type)
    console.log('previous state', store.getState())
    console.log('action', action)
    next(action) // pass it to next middleware or reducer
    console.groupEnd() // group ends
}

export default loggerMiddleware