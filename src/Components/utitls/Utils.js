/* import { actionTypes } from "../../reducer";

export const addToCart = (quantity) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_NOTIFS,
    notifs: {
      value: true,
      error: false,
      msg: quantity + "Product added to cart",
    },
  });
  setTimeout(() => {
    dispatch({
      type: actionTypes.SET_NOTIFS,
      notifs: { value: false, error: false, msg: "Product added to cart" },
    });
  }, 2000);
};
 */
