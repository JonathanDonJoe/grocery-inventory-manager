//  All reducers have 2 params: Current statement (usually provide a default) and the action object

const seedData = [
    {
        food: 'cheese',
        quantity: 1
    },
    {
        food: 'milk',
        quantity: 37
    },
    {
        food: 'yogurt',
        quantity: 75
    },
    {
        food: 'kefir',
        quantity: 3
    }
]





export default(state = seedData, action) => {
    // console.log('Dairy Reducer is running!');
    // console.log(action.type)
    if (action.type === 'updateDairy') {
        let newState = [...state];
        if (action.payload.operation === '+') {
            newState[action.payload.indexToChange].quantity++
        } else if (action.payload.operation === '-') {
            newState[action.payload.indexToChange].quantity--
        }
        return newState;
    } else if (action.type === 'clearInventory') {
        return [];
    } else if (action.type === 'resetInventory') {
        return seedData;
    } else if (action.type === 'addItem-Dairy') {
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