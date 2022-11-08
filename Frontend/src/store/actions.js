import { types } from './types'

export const addAdmin = ({ username, email }) => ({ type: types.ADD_ADMIN, payload: { username, email } });

export const Modal = () => ({ type: types.MODAL });

export const Feedback = () => ({ type: types.FEEDBACK });
