
import Update from './update';
import Convert, { changeConvValues, clearConvValues} from './convert';
import Transaction, {changeTransValues, clearTransValues} from './transaction';
import histChange from './history';

const Actions={
    Update,
    Convert,
    changeConvValues,
    clearConvValues,
    Transaction,
    changeTransValues,
    clearTransValues,
    histChange
}
export default Actions;
