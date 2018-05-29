import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './Reducers/activos.js';
import {addActivo} from './Actions/index.js';
import ActivosList from './components/Activo/ActivosList.jsx';
import CreateActivo from './components/Activo/CreateActivo.jsx';


import './styles/styles.scss';

// const initialState = {
//     listaActivos: ["Activo 1","Activo 2","Activo 3"]
// };
const store = createStore(reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store=store;

const App = ({state}) =>
(
    <div>
        <div className="column1">
            <ActivosList />
        </div>
        <div className="column2">
        <CreateActivo />
        </div>
    </div>
);


const appRender = () => render(
    <Provider store={store}>
        <App />
    </Provider>
        , document.querySelector('#app'));

    store.subscribe(appRender);
    store.dispatch(addActivo('mi nuevo activo'));
    console.info('STATE: ', store.getState());
    appRender();
