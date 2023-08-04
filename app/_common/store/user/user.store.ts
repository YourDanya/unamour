import {create} from 'zustand'
import {UserState} from 'app/_common/store/user/user.types'

export const useUserStore = create<UserState>((set) => ({
    user: undefined,
    setUser: (user) => set({user}),
    register: {error: null, loading: false, success: false},
    setRegister: (newRegister) => set((state) => {
        return {register: {...state.register, ...newRegister}}
    }),
    sendRegisterCode: {error: null, loading: false, success: false},
    setSendRegisterCode: (newSendRegisterCode) => set((state) => {
        return {sendRegisterCode: {...state.sendRegisterCode, ...newSendRegisterCode}}
    }),
    updateEmail: {error: null, loading: false, success: false},
    setUpdateEmail: (newUpdateEmail) => set((state) => {
        return {updateEmail: {...state.updateEmail, ...newUpdateEmail}}
    })
}))