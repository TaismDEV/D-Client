import { types } from './types'

export const addAdmin = ({ username, email }) => ({ type: types.ADD_ADMIN, payload: { username, email } });

export const Modal = () => ({ type: types.MODAL });

export const Feedback = () => ({ type: types.FEEDBACK });

export const request = ( { Naam, phoneNummer, adress, info } ) => {
  return async (dispatch) => {
    try {
        const obj = { Naam, phoneNummer, adress, info };
        const token = process.env.REACT_APP_TOKEN;
        const chat_id = process.env.REACT_APP_CHAT_ID;
        const URL_API = "https://api.telegram.org/bot" + token + "/sendMessage";
        const message = `<strong>Naam</strong> - <em>${obj.Naam}</em>\n<strong>Phone Nummer</strong> - <em>${obj.phoneNummer}</em>\n<strong>Adress</strong> - <em>${obj.adress}</em>\n<strong>Object informatie</strong> - <em>${obj.info}</em>`;
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
