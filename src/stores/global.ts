import { create } from 'zustand'

type State = {
	isLogin: boolean
	userAddress: string
}

const globalStore = create<State>((set) => ({
	isLogin: false,
	userAddress: '',
}))

export default globalStore
