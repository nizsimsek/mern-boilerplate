import Login from "../../views/auth/Login";

const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        login: action.payload,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        login: false,
        user: {},
        page: <Login />,
      };
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "SET_ACTIVE_PAGE":
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
