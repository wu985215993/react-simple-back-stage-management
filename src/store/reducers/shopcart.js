/* 管理购物车的reducer */
export default function shopcartReducer(state = { list: [] }, action) {
  switch (action.type) {
    case "setData":
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
