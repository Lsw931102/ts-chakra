import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { theme } from '@/theme'
import Header from './components/Header'
import Home from './pages/Home'
import { getLocalStorage } from '@/utils/storage'
import globalStore from './stores/global'

function App() {
	useEffect(() => {
		const isLogin = getLocalStorage('isLogin')
		globalStore.setState({
			isLogin: isLogin === '1' ? true : false,
		})
	}, [])
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	)
}

export default App
