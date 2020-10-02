import {connect} from 'react-redux';
import Counter from '../pages/components/counter/counter';


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
        handleTestParamClick: (value: number) => dispatch({type: 'TEST_PARAM', value: value})
    }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;