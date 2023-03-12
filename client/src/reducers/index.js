import productsReducer, {
    actionFetchAllProducts,
    actionProductsQuantity,
    actionSortByPrise,
    actionPageLoading,
    actionFetchSearchFilterProducts,
    actionSearchInputValue,
    actionAllProducts,
    actionFetchSearchProducts,
} from "./products.reducer";
import favoritesReducer, {
  actionAddToFavorites,
  actionDeleteFromFavorites,
} from './favorites.reducer';
import scalesReducer, { actionAddToScales, actionDeleteFromScales } from './scales.reducer';
import basketReducer, {
    actionAddToBasket,
    actionDeleteFromBasket,
    actionBasketProduct,
    actionIncrease,
    actionDecraese,
    actionFetchProductByItemNo,
    actionAddToProducts,
    actionFetchAddUserCart,
    actionGetCart,
    actionAddToAuthBasket,
    actionDeleteFromAuthBasket,
    actionDeleteFromProducts,
    actionAuthProducts,
    actionDeleteAllFromAuthBasket,
    actionDeleteAllProducts
} from "./basket.reducer";
import logInReducer, {
    actionFetchLogin,
    actionToken,
    actionFetchAuthorizationUser,
    actionResetLoginError
} from "./logIn.reducer";
import productDetailsReducer, {
    actionFetchOneProduct,
} from "./productDetails.reducer";
import registrationReducer, {
    createCustomerServerApi,
} from './registration.reducer';
export{
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
    basketReducer,
    actionAddToBasket,
    actionDeleteFromBasket,
    actionBasketProduct,
    actionIncrease,
    actionDecraese,
    actionFetchProductByItemNo,
    actionAddToProducts,
    actionFetchAddUserCart,
    actionGetCart,
    actionAddToAuthBasket,
    actionDeleteFromAuthBasket,
    actionDeleteFromProducts,
    actionAuthProducts,
    actionDeleteAllFromAuthBasket,
    actionDeleteAllProducts,
    scalesReducer,
    actionAddToScales,
    actionDeleteFromScales,
    logInReducer,
    actionFetchLogin,
    actionResetLoginError,
    actionFetchAuthorizationUser,
    actionToken,
    productDetailsReducer,
    actionFetchOneProduct,
    registrationReducer,
    createCustomerServerApi,
}
