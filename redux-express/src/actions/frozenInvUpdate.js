// Action is an object with at least one property: type
// The action is going to be handed to the dispatch, which will send that action to all reducers

export default (operation, indexToChange) => {
    return {
        type: 'updateFrozen',
        payload: {
            operation,
            indexToChange
        }
    }
}
