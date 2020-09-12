export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) => (
  basket.reduce((sum, item) => sum + item.price, 0)
);

export const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item]}
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      const newBasket = [...state.basket];
      if(index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`can't remove Product (id: ${action.id}) as it is not in basket`);
      }
      return { ...state, 
        basket: newBasket
      };
    case "SET_USER":
      return {
        ...state, user: action.user
      }
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }
    default:
      return state;
  }
}
