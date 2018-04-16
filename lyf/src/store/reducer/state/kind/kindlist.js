
const kindlistData = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "KIND_LIST":
  	   return [...state, data]
  		break;
  	default:
  	   return state;
  		break;
  }
}
export default kindlistData;