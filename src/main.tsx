import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App.tsx'
import rootReducer from './store/rootReducer.ts';

const store = configureStore({
    reducer: rootReducer
})

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
)
