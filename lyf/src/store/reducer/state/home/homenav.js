
const homenav = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "HOME_NAV":
  	   return [...state, data]
  		break;
  	default:
  	   return state;
  		break;
  }
}
export default homenav;