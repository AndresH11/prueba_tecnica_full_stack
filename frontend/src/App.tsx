import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ApolloProvider } from '@apollo/client'
import { clientApollo } from './configs/apollo'
import { store } from './configs/redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

function App() {
	return (
		<ApolloProvider client={clientApollo}>
			<Provider store={store}>
				<Toaster
					position="top-right"
					toastOptions={{
						duration: 5000,
					}}
				/>
				<RouterProvider router={router} />
			</Provider>
		</ApolloProvider>
	)
}

export default App
