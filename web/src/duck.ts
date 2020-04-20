export default (state = {}, action: any) => {
    console.log(action.type);
    return {...state};
};