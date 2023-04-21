import { create } from 'zustand'

type State = {
  isLogin: boolean
  userAddress: string
}

const globalStore = create<State>(() => ({
  isLogin: false,
  userAddress: '',
}))

export default globalStore
