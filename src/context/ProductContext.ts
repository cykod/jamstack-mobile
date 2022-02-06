import createDataContext from './createDataContext';

import api from '../api/Api'


const productReducer = (state:any, action:any) : any => {
  switch(action.type) {
    case "load_products":
      return { ...state, products: action.payload }
    default:
      return state
  }
}

const loadProducts = dispatch => async() => {
  try {
    const response = await api.get("/api/products?populate=*");

    if(response.data.error) {
      // navigate to an error page 
      // that has a reload button

    } else {
      dispatch({ type: 'load_products', payload: response.data.data })
    }
  } catch (err) {
    // navigate to error page?
  }
}


export const { Provider, Context } = createDataContext(
  productReducer,
  { loadProducts },
  { products: [] }
);