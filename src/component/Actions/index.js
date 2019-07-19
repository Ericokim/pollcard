import axios from "axios";
import { getItemBegin, getItemSuccess, getItemFailure } from "./ItemAction";

const base = "http://localhost:3000/Polls";

// export const getChecked = dispatch => {
//   dispatch(getItemBegin());

//   return axios
//     .get(`${base}`)
//     .then(res => res.data)
//     .then(data => {
//       dispatch(getItemSuccess(data));
//     })
//     .catch(error => {
//       dispatch(getItemFailure(error));
//     });
// };

export function getChecked() {
  return dispatch => {
    dispatch(getItemBegin());

    return fetch("http://localhost:3000/Polls")
      .then(res => res.data)
      .then(data => {
        dispatch(getItemSuccess(data));
      })
      .catch(error => {
        dispatch(getItemFailure(error));
      });
  };
}
