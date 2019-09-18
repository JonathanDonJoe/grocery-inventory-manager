//  All reducers have 2 params: Current statement (usually provide a default) and the action object

const seedData = [
    {
        food: 'pizza',
        quantity: 12
    },
    {
        food: 'ice cream',
        quantity: 21
    },
    {
        food: 'family dinner',
        quantity: 5
    },
    {
        food: 'frozen veggies',
        quantity: 132
    }
]




export default(state = seedData, action) => {
    // console.log('Frozen Reducer is running!');
    // console.log(action.type)
    // console.log(action.payload)
    if (action.type === 'updateFrozen') {
        let newState = [...state];
        if (action.payload.operation === '+') {
            newState[action.payload.indexToChange].quantity++;
        } else if (action.payload.operation === '-') {
            newState[action.payload.indexToChange].quantity--;
        }
        return newState;
    } else if (action.type === 'clearInventory') {
        return [];
    } else if (action.type === 'resetInventory') {
        return seedData;
    } else if (action.type === 'addItem-Frozen') {
        let newState = [...state];
        const {food, quantity} = action.payload;
        newState.push({
            food: food,
            quantity: quantity
        });
        return newState;
    } else {
        return state;
    }
}