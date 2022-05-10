const WishListReducer = (state, action) => {
    switch(action.type) {
        case "SETCOUNT":
            return action.payload;
        default:
            return state;
    }
}

export default WishListReducer;