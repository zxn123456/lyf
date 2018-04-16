
const cartData = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "CART_DATA":
  	   return [...state, data]
  		break;
  	default:
  	   return state;
  		break;
  }
}
export default cartData;