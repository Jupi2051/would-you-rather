const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log("Action: "+action.type)
        const returnfromnext = next(action);
        console.log("New state is: ", store.getState())
    console.groupEnd();
    return returnfromnext;
}

export default logger;