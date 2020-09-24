export const initialState={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:null
    //token: "BQBo3L8jqcNq8lpOA1V8KVzB6AVIbufacEHkcu4SreJcWhNeQ51jkrJ9bZ0cHaOLSagVtYObEBU8p7plxMO0k_m-7ROBQ3vaNMmlqzQfmYr4A6-M4K27TYpFoBroBgqEuGDOZEY27XjSqDBYXWqZGfxSry3BOsfvE7zMy7DYqyDBLKoNJNtA",
}

export const actionTypes={
    SET_USER: "SET_USER",
    SET_TOKEN: "SET_TOKEN",
    SET_PLAYLISTS: "SET_PLAYLISTS",
};

const reducer=(state, action)=>{
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user,
            };

        case actionTypes.SET_TOKEN:
            return{
                ...state,
                token: action.token,
            };
        case actionTypes.SET_PLAYLISTS:
            return{
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;