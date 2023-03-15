import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_USER } from "../endpoints";

const initialState = {
    userInfo: null,
    editInputs: [],
    changePassword: {
        oldPassword: '',
    },
    changePasswordMessage: '',
    pageLoading: false,
}

const personalOfficeSlice = createSlice({
    name: "personalOffice",
    initialState,
    reducers: {
        actionUserInfo: (state, { payload }) => {
            state.userInfo = {...payload}
        },
        actionEditInputs: (state, { payload }) => {
            state.editInputs = []
            state.editInputs.push(payload)
        },
        actionChangePasswordMessage: (state, { payload }) => {
            state.changePasswordMessage = payload
        },
        actionPageLoading: (state, {payload}) => {
            state.pageLoading = payload
        },
    }
})

export const { actionUserInfo, actionEditInputs, actionChangePasswordMessage, actionPageLoading } = personalOfficeSlice.actions

export const actionFetchUserInfo = () => (dispatch) => {
    dispatch(actionPageLoading(true))
    return axios
        .get(GET_USER)
        .then(loggedInCustomer => {
                const {firstName, lastName, login, email , telephone, gender, avatarUrl} = loggedInCustomer.data
                dispatch(actionUserInfo({ firstName,  lastName, login, email , telephone, gender, avatarUrl}))
                dispatch(actionPageLoading(false))
              }) 
              .catch( err => {
                 /*Что-то сделать с ошибкой */
        });
}

export const actionFetchUpdateCustomer = (newUserInfoObj) => (dispatch) => {
    dispatch(actionPageLoading(true))
    return axios
        .put("/customers", newUserInfoObj)
        .then(updatedCustomer => { console.log(updatedCustomer, '111111111') 
        dispatch(actionPageLoading(false))
    })
        .catch(err => {/*Do something with error, e.g. show error to customer*/ })
}

export const actionFetchUpdateCustomerPassword = (userPasswordObj) => (dispatch) => {
    dispatch(actionPageLoading(true))
    return axios
        .put("/customers/password", userPasswordObj)
        .then(updatedCustomer => { 
            updatedCustomer.data.message ? 
            dispatch(actionChangePasswordMessage(updatedCustomer.data.message))
            :
            dispatch(actionChangePasswordMessage(updatedCustomer.data.password))
            dispatch(actionPageLoading(false))
       })
        .catch(err => console.log(err) )
}

export default personalOfficeSlice.reducer 