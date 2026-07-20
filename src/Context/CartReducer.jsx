// oxlint-disable-next-line react/only-export-components
export const initialState ={
    cartItem: [],
}

export function CartReducer(state, action){
    switch(action.type){
        case "ADD_TO_CART" : {
            const item = action.payload;

            const existingItem = state.cartItem.find(
                (cartItem) => cartItem.id === item.id
            )

            if(existingItem){
                return {
                    ...state,
                    cartItem: state.cartItem.map((cartItem) => 
                    cartItem.id === item.id
                    ?{...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem
                ),
            };
            }
            return {
                ...state,
                cartItem: [...state.cartItem, {...item, quantity: 1}]
            }
        }

case "INCREMENT": {
    const id = action.payload;

    return {
        ...state,
        cartItem: state.cartItem.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ),
    };
}

        case "DECREMENT" : {
            const id = action.payload;
            return{
                ...state,
                cartItem: state.cartItem
                .map((item) =>
                item.id === id ? {...item, quantity: item.quantity - 1}: item 
            ) 
            .filter((item) => item.quantity > 0),
            }
        }
        case "REMOVE_FROM_CART":{
            const id = action.payload;
            return{
                ...state,
                cartItem: state.cartItem.filter((item) => item.id !== id),
            }
        }
        default:
            return state;
    }
}