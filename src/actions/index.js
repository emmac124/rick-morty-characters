import axios from 'axios';
export const CHARACTERS_SUCCESS = "CHARACTERS_SUCCESS";

export const fetchAllCharacters = () => {
    return (dispatch) => {
        axios
            .get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,17,9,11,13,14,15")
            .then(res => {
                console.log("Results", res);
                dispatch({type: CHARACTERS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log(err);
            })
    }
}