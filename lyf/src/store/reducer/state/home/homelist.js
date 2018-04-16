import homeData from '@api/homeData'

const homelist = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "HOME_LIST":
  	   return [...state, data]
  		break;
  	default:
  	   return state;
  		break;
  }
}
export default homelist;