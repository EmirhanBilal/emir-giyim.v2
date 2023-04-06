import { io } from "socket.io-client";
import { countAtom } from "./recoil-states";
import { useSetRecoilState } from "recoil";
export { useHandleCount };

const socket = io.connect("http://localhost:3001");

const useHandleCount = (asd) => {
  const setCount = useSetRecoilState(asd);
  setCount((pre) => pre + 1);
  return setCount;
};

export const sendEmmit = (dispatch, data) => {
  socket.emit(dispatch, {
    message: data,
  });
};
