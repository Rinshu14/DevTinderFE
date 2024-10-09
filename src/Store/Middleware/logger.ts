import { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (state) => (next) => (action) => {
    console.log(action)
    console.log(state.getState())
    console.log(action)
    next(action)

}