
const storedData = (payload) => ({
    type:"STORE_DATA",
    payload
});

const handleLoading = () => ({
    type:"IS_LOADING"
})

const handleEroor = () => ({
    type:"IS_ERROR"
})

const getData = () => (dispatch) => {

    dispatch(handleLoading())
    fetch("http://localhost:8080/products")
    .then((res) => res.json())
    .then((res) => {
      // console.log(res)
      dispatch(storedData(res))
    })
    .catch(() => {
      // console.log(err)
      dispatch(handleEroor())
    })

}

export {storedData, handleEroor, handleLoading,getData}