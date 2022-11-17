import { types } from './types'

export const addAdmin = ({ username, email }) => ({ type: types.ADD_ADMIN, payload: { username, email } });

export const Modal = () => ({ type: types.MODAL });

export const Feedback = () => ({ type: types.FEEDBACK });

export const request = ( { firstName, lastName, phoneNummer, adress } ) => {
  return async (dispatch) => {
    try {
        const obj = { firstName, lastName, phoneNummer, adress };
        const token = process.env.REACT_APP_TOKEN;
        const chat_id = process.env.REACT_APP_CHAT_ID;
        const URL_API = "https://api.telegram.org/bot" + token + "/sendMessage";
        const message = `<strong>FirstName</strong> - <em>${obj.firstName}</em>\n<strong>Last Name</strong> - <em>${lastName}</em>\n<strong>Phone Nummer</strong> - <em>${phoneNummer}</em>\n<strong>Adress</strong> - <em>${adress}</em>`;
        await fetch(URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: message,
                parse_mode: "HTML",
            }),
        });
        console.log("Message sent");
        dispatch(Modal());
      } catch (err) {
        console.log('=========>>>>', err);
      }
  }
};
