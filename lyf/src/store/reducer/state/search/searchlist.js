
const searchlish = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "SEARCH_LIST":
  	   return [...state, data]
  		break;
  	default:
  	   return state;
  		break;
  }
}
export default searchlish;