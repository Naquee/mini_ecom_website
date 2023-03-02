import { PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS, SINGLE_PRODUCT_ERROR, SINGLE_PRODUCT_LOADING, SINGLE_PRODUCT_SUCCESS } from "./actionType"

const initialState = {
    loading:false,
    error:false,
    products:[],
    singleProduct:{}  //obj bcz we need onle one id prducts for detailing
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case PRODUCT_LOADING:
            return {...state, loading:true}

            case PRODUCT_ERROR:
                return {...state, loading:false, error:true}

                case PRODUCT_SUCCESS:
                    return {...state, loading:false, error:false, products:action.payload}


                    // FOR SINGLE PRODUCT

                    case SINGLE_PRODUCT_LOADING:
                        return {...state, loading:true}
            
                        case SINGLE_PRODUCT_ERROR:
                            return {...state, loading:false, error:true}
            
                            case SINGLE_PRODUCT_SUCCESS:
                                return {...state, loading:false, error:false, singleProduct:action.payload}

            default :
            return state
    }

}

export {productReducer}