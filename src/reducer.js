export const initialState = {
  user: null,
  config: null,
  adminData: { value: false, data: null },
  userData: { value: false, data: null },
  products: { value: false, error: false, errorMSg: "", data: null },
  cart: { value: false, error: false, errorMSg: "", data: null },
  notifs: { value: false, error: false, msg: "" },
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_CONFIG: "SET_CONFIG",
  SET_USER_DETAILS: "USER_DETAILS",
  SET_ADMIN_DETAILS: "ADMIN_DETAILS",
  SET_PRODUCTS: "ADMIN_PRODUCTS",
  SET_CART: "ADMIN_CART",
  SET_NOTIFS: "SET_NOTIFS",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_NOTIFS:
      return {
        ...state,
        notifs: action.notifs,
      };

    default:
      return state;
  }
};

export default reducer;
