import FranchiseReducer from "./Franchise/FranchiseReducer";
import BranchReducer from "./Branch/BranchReducer";
import { combineReducers } from "redux";
import ProductsReducer from "./Catalog/getProductsRed";
const rootReducer =combineReducers({
  franchise:FranchiseReducer,
  branch:BranchReducer,
  products:ProductsReducer,
})
export default rootReducer;