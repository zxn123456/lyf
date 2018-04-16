
const kindname = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "KIND_NAME":
  	   return [...state, data]
  		break;
  	default:
  	   return state;
  		break;
  }
}
export default kindname;