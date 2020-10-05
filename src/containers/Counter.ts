import {connect} from 'react-redux';
import Counter from '../components/counter/counter';


const mapStateToProps = (state: any) => {
    return {
        count: state.count,
        data: state.data
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleIncrementClick: () => dispatch({type: 'INCREMENT'}),
        handleDecrementClick: () => dispatch({type: 'DECREMENT'}),
        handleDataClick: () => dispatch({type: 'GET_NEWS'}),
        handleTestParamClick: (value: number) => dispatch({type: 'TEST_PARAM', payload: value})
    }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;