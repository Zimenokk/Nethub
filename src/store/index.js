import {applyMiddleware, createStore} from "redux";
import {combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'
import createArticleSlice from "./createArticleSlice";


export default configureStore({
    reducer: {
        articleReducer: createArticleSlice,
    }
})