import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import BasicPage from './components/BasicPage'
import { store, persistor } from './store/configureStore'
import './styles/style.scss'
import 'normalize.css/normalize.css'

const jsx = (
    //Provides the store to any component that may need, so we don't have to pass down every single time.
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BasicPage />
        </PersistGate>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))