export default (dept, food, quantity) => {
    const type = `addItem-${dept}`;
    return {
        type: type,
        payload: {
            food: food, 
            quantity: quantity
        }
    }
}