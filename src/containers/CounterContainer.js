import PresentationalCount from '../components/PresentationalCount';
import * as actions from '../actions';
import { connect } from 'react-redux';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
  number: state.number
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment())
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalCount);


export default CounterContainer;