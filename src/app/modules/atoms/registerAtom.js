import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';



const {persistAtom} = recoilPersist({
    key: 'recoil-persist',
    Storage: AsyncStorage,
});


export const registerUserAtom = atom({
    key : 'registration',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

