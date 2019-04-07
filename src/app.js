import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import './styles/style.scss'
import 'normalize.css/normalize.css'

const store = configureStore()

const jsx = (
    //Provides the store to any component that may need, so we don't have to pass down every single time.
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))