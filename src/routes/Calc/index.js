import { setIsLoading, addRValue, clearRInput, countR, evaluateR, addDotR } from 'modules/Calc/Calc.redux';
import { connect } from 'react-redux';

import Calc from './Calc';

const mapStateToProps = (state) => ({
    isLoading: state.calcReducer.isLoading,
    results: state.calcReducer.results,
    //4
    inputValue: state.calcReducer.inputValue
  })
  
  const mapDispatchToProps = {
    setIsLoading,
    addRValue,
    clearRInput,
    countR,
    evaluateR,
    addDotR,
  }
  
export const Calc = connect(mapStateToProps, mapDispatchToProps)(CalcComponent)

