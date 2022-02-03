import { connect } from 'react-redux';
import PendingPayment from './pending';
import SuccessfulPayment from './success';

const Transaction = ({ transaction }) => (transaction === 'pending' ? <PendingPayment /> : <SuccessfulPayment />);

const mapStateToProps = state => ({ transaction: state.payment.transaction });

export default connect(mapStateToProps)(Transaction);
