import { connect } from 'react-redux';
import {ILoginState} from '../store/login/ILogin';
import {login} from '../store/login/actions';
// import Login from '../components/login/login';
import { Dispatch } from 'redux';


const mapStateToProps = (state: ILoginState) => {
    return {
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleLoginClick: (user: ILoginState) => dispatch(login(user))
    }
}

// const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default 'LoginContainer';
