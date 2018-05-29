import React from 'react';
import {connect} from 'react-redux';
import addActivo from '../../Actions/index.js';

class CreateActivo extends React.Component {
    render() {
        return (
            <div>
                <label>Description: </label>
                <input type="text" />
                <input type="button" value="Nuevo" onClick={this.props.addActivo('rrrrrr')}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      listaActivos: state.listaActivos,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      addActivo: (description) => dispatch({
        type: 'ADD_ACTIVO',
        activo: description,
      }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivo);
