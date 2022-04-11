import axios from "axios";
import { toast } from "react-toastify";
export const getAllProducts= () => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/webpos/get_all_products`)
         .then(products => {
            dispatch({
                type: "GET_ALL_PRODUCTS",
                products
            })
            }).catch(err => {
                console.log("error", err);
            
            })
    }
}