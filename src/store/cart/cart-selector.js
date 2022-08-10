import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartState = createSelector(
  [selectCartReducer],
  (cart) => cart.cartState
);

export const selectItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectTotalCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (cartTotal, item) => cartTotal + item.price * item.quantity,
    0
  )
);
