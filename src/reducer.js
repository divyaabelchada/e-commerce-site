export const initialState = {
  user: null,
  userDetails: null,
  adminDetails: null,
  admin: null,
  config: null,
  userData: { value: false, data: null },
  products: { value: false, error: false, errorMSg: "", data: null },
  cart: { value: false, error: false, errorMSg: "", data: null },
  notifs: { value: false, error: false, msg: "" },
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_ADMIN: "SET_ADMIN",
  SET_CONFIG: "SET_CONFIG",
  SET_USER_DETAILS: "USER_DETAILS",
  SET_USER_DASHBOARD: "USER_DASHBOARD",
  SET_ADMIN_DASHBOARD: "ADMIN_DASHBOARD",
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_CART: "SET_CART",
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
    case actionTypes.SET_USER_DASHBOARD:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    case actionTypes.SET_ADMIN:
      return {
        ...state,
        admin: action.admin,
      };
    case actionTypes.SET_ADMIN_DASHBOARD:
      return {
        ...state,
        adminDetails: action.adminDetails,
      };
    case actionTypes.SET_USER_DETAILS:
      return {
        ...state,
        userData: action.userData,
      };
    case actionTypes.SET_NOTIFS:
      return {
        ...state,
        notifs: action.notifs,
      };
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    default:
      return state;
  }
};

export default reducer;
