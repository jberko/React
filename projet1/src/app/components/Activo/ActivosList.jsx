import React from 'react';
import {connect} from 'react-redux';
import Activo from './Activo.jsx';

class ActivosList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.listaActivos.map(function(activo, i) {
                            return (<li key={i}>{activo}</li>);
                        }
                    )
                }
            </ul>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        listaActivos: state.listaActivos,
    };
  };

//   const mapDispatchToProps = (dispatch) => {
//     return {
//       destroyTodo: () => dispatch({
//         type: 'DESTROY_TODO',
//       }),
//     };
//   };

export default connect(mapStateToProps)(ActivosList);


