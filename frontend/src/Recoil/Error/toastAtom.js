import { atom } from "recoil"

export const toastState = atom({
    key: "toastState",
    default: {isError: false, message: ""}, 
});
