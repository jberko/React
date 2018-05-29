import {Connect} from 'react-redux'
import ActivosList from './ActivosList.jsx'
import { connect } from 'net';

const mapStateToProps = (state,props) =>
{
    return {listaActivos : state.listaActivos}
}

const ConnectedActivosList = connect(mapStateToProps)(ActivosList)