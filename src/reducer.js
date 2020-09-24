export const initialState={
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //token: null
    //token: "BQBo3L8jqcNq8lpOA1V8KVzB6AVIbufacEHkcu4SreJcWhNeQ51jkrJ9bZ0cHaOLSagVtYObEBU8p7plxMO0k_m-7ROBQ3vaNMmlqzQfmYr4A6-M4K27TYpFoBroBgqEuGDOZEY27XjSqDBYXWqZGfxSry3BOsfvE7zMy7DYqyDBLKoNJNtA",
}

export const actionTypes={
    SET_USER: "SET_USER",
    SET_TOKEN: "SET_TOKEN",
    SET_PLAYLISTS: "SET_PLAYLISTS",
    SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY",
    SET_ITEM: "SET_ITEM",
    SET_PLAYING: "SET_PLAYING"
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
        case actionTypes.SET_DISCOVER_WEEKLY:
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        case actionTypes.SET_PLAYING:
            return{
                ...state,
                playing: action.playing,
            }
        case actionTypes.SET_ITEM:
            return{
                ...state,
                item: action.item,
            }    
        default:
            return state;
    }
};

export default reducer;