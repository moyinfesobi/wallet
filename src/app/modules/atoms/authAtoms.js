import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';


  
const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  Storage: AsyncStorage,
});

export const authState = atom({
  key: "auth",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
