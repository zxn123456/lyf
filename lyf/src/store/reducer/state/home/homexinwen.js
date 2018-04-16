
const homexinwen = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "HOME_BANNER":
  	   return [...state, data]
  		break;
  	default:
  	   return state;
  		break;
  }
}
export default homexinwen;