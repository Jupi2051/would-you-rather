import thunk from "redux-thunk";
import logger from "./Logging";
import { applyMiddleware } from "redux";

export default applyMiddleware(
    thunk,
    logger
)
