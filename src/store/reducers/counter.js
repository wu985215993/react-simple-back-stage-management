export default function countReducer(state = { count:0},action){
    switch (action.type) {
      case "add":
        return {
          ...state,
          count: state.count + action.payload,
        }
      default:
        return state;
    }
  }