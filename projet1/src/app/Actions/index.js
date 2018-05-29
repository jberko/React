export const addActivo = (activo) =>
        ({
            type: 'ADD_ACTIVO',
            activo,
        });


export const updateActivo = (activo) => ({
    type: 'UPDATE_ACTIVO',
    activo,
});

export const deleteActivo = (idActivo) => ({
    type: 'ADD_ACTIVO',
    idActivo,
});
