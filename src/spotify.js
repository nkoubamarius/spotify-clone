export const authEndpoint="https://accounts.spotify.com/authorize";

const redirectUrl="https://spotify-clone-react.netlify.app/"

const clientId="b3c0262c756c42a5aedfdf79e8e74858";

const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item)=>{
        let parts=item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1])

        return initial;
    },{});
}

export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
    )}&response_type=token&show_dialog=true`;