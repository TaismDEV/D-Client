import { types } from './types'

export const addAdmin = ({ username, email }) => ({ type: types.ADD_ADMIN, payload: { username, email } });

export const Modal = () => ({ type: types.MODAL });

export const Feedback = () => ({ type: types.FEEDBACK });

export const request = ( { firstName, lastName, phoneNummer, adress } ) => {
  return async (dispatch) => {
    try {
        const obj = { firstName, lastName, phoneNummer, adress };
        const token = "5321948291:AAHTxsNHpb3WOpcPCXg3Mjgcc1y64bqMe50";
        const chat_id = "-1001844691188";
        const URL_API = "https://api.telegram.org/bot" + token + "/sendMessage";
        const message = `FirstName - ${obj.firstName}\n Last Name - ${lastName}\n Phone Nummer - ${phoneNummer}\n Adress - ${adress}`;
        await fetch(URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: message,
            }),
        });
        console.log("Message sent");
        dispatch(Modal());
      } catch (err) {
        console.log('=========>>>>', err);
      }
  }
};
