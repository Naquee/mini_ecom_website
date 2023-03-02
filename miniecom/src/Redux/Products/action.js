import { PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS, SINGLE_PRODUCT_ERROR, SINGLE_PRODUCT_LOADING, SINGLE_PRODUCT_SUCCESS } from "./actionType";

const handleSuccess = (payload) => ({
    type:PRODUCT_SUCCESS,
    payload
});

const handleLoading = () => ({
    type:PRODUCT_LOADING
})

const handleEroor = () => ({
    type: PRODUCT_ERROR
})

const getData = () => (dispatch) => {

    dispatch(handleLoading())
    fetch("http://localhost:8080/products")
    .then((res) => res.json())
    .then((res) => {
      // console.log(res)
      dispatch(handleSuccess(res))
    })
    .catch(() => {
      // console.log(err)
      dispatch(handleEroor())
    })

}

// for single Products

const storeSingleProductdData = (payload) => ({
  type:SINGLE_PRODUCT_SUCCESS,
  payload
});

const handleSingleProductLoading = () => ({
  type:SINGLE_PRODUCT_LOADING
})

const handleSingleProductEroor = () => ({
  type:SINGLE_PRODUCT_ERROR
})

const getSingleProductData = (id) => (dispatch) => {

  dispatch(handleSingleProductLoading())
  fetch(`http://localhost:8080/products/${id}`)
  .then((res) => res.json())
  .then((res) => {
    // console.log(res)
    dispatch(storeSingleProductdData(res))
  })
  .catch(() => {
    // console.log(err)
    dispatch(handleSingleProductEroor())
  })

}


export {getData,getSingleProductData}