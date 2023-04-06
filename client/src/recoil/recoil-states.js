import { atom } from "recoil";

export const countAtom = atom({
  key: "count",
  default: 0,
});
export const usersAtom = atom({
  key: "users",
  default: [],
});
export const loginAtom = atom({
  key: "login",
  default: false,
});
export const cartProductsAtom = atom({
  key: "cartProducts",
  default: [],
  writable: true,
});
export const currentUserAtom = atom({
  key: "currentUser",
  default: {},
});
export const offlineUserAtom = atom({
  key: "offlineUser",
  default: [],
});
