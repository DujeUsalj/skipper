export const initialState = {
  basket: [],
  currentUser: null,
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.currentUser,
        users: [...state.users, action.currentUser],
      };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove product no id");
      }
      return { ...state, basket: newBasket };
      break;

    default:
      return state;
  }
};
// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);

export default reducer;
