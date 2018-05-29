const initialState = {
   listaActivos: ['Activo 1', 'Activo 2', 'Activo 3'],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ACTIVO':
      {
          debugger;
        return Object.assign({}, state, {listaActivos: [...state.listaActivos, action.activo]});
      }
    }
    debugger;
};

export default reducer;
