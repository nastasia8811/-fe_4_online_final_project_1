import productsReducer, {
  actionFetchAllProducts,
  actionProductsQuantity,
  actionSortByPrise,
  actionPageLoading,
  actionFetchSearchFilterProducts,
  actionSearchInputValue,
  actionAllProducts,
  actionFetchSearchProducts,
} from './products.reducer';
import favoritesReducer, {
    actionAddToFavorites,
    actionDeleteFromFavorites,
    toggleFavoriteProduct
} from './favorites.reducer';
import scalesReducer, {
  actionAddToScales,
  actionDeleteFromScales,
  toggleScalesProduct,
  actionFetchProductScalesByItemNo,
} from './scales.reducer';
import basketReducer, {
  actionAddToBasket,
  actionDeleteFromBasket,
  actionBasketProduct,
  actionIncrease,
  actionDecraese,
  actionFetchProductByItemNo,
} from './basket.reducer';
import logInReducer, {
  actionFetchLogin,
  actionToken,
  actionFetchAuthorizationUser,
  actionResetLoginError,
} from './logIn.reducer';
import productDetailsReducer, {
  actionFetchOneProduct,
  actionFetchAddComment,
  actionFetchAllComments
} from './productDetails.reducer';
import registrationReducer, {
  createCustomerServerApi,
  actionCreateCustomer,
  initialState } from './registration.reducer';
import discountedProductsReducer, {
  actionDiscountedProducts,
  actionFetchDiscountedProducts,
} from './discountedProducts.reducer';
import checkoutReducer, {
  actionFetchCreateOrder,
  actionIsOrdered
} from './checkout.reducer';
import personalOfficeReducer, {
    actionUserInfo, 
    actionFetchUserInfo, 
    actionEditInputs,
    actionFetchUpdateCustomer,
    actionFetchUpdateCustomerPassword,
    actionChangePasswordMessage,
} from "./personalOffice.reducer";

export {
  productsReducer,
  actionFetchAllProducts,
  actionAllProducts,
  actionProductsQuantity,
  actionSortByPrise,
  actionSearchInputValue,
  actionPageLoading,
  actionFetchSearchProducts,
  actionFetchSearchFilterProducts,
  favoritesReducer,
  actionAddToFavorites,
  actionDeleteFromFavorites,
  toggleFavoriteProduct,
  basketReducer,
  actionAddToBasket,
  actionDeleteFromBasket,
  actionBasketProduct,
  actionIncrease,
  actionDecraese,
  actionFetchProductByItemNo,
  checkoutReducer,
  actionFetchCreateOrder,
  actionIsOrdered,
  scalesReducer,
  actionAddToScales,
  actionDeleteFromScales,
  toggleScalesProduct,
  actionFetchProductScalesByItemNo,
  logInReducer,
  actionFetchLogin,
  actionResetLoginError,
  actionFetchAuthorizationUser,
  actionToken,
  productDetailsReducer,
  actionFetchOneProduct,
  actionFetchAddComment,
  actionFetchAllComments,
  registrationReducer,
  createCustomerServerApi,
  actionCreateCustomer,
  initialState,
  discountedProductsReducer,
  personalOfficeReducer,
  actionDiscountedProducts,
  actionFetchDiscountedProducts,
  actionUserInfo, 
  actionFetchUserInfo, 
  actionEditInputs,
  actionFetchUpdateCustomer,
  actionFetchUpdateCustomerPassword,
  actionChangePasswordMessage,
};
