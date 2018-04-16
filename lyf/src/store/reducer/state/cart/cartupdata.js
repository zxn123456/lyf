
const cartupdata = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "CART_UPDATA":
  	   return [...state, data]
  		break;
  	default:
  	   return state;
  		break;
  }
}
export default cartupdata;