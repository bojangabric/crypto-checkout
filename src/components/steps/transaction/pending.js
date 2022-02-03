import { connect } from 'react-redux';
import Button from 'components/button';
import { forceAcceptPayment } from 'redux/actions/payment';

const PendingPayment = ({ forceAcceptPayment, transactionId }) => (
  <div>
    <div className="mt-10 bg-white px-[43px] py-[50px] text-center drop-shadow-button">
      <img src="/images/refresh.png" className="mx-auto" />
      <p className="mt-4 text-[26px] font-medium">Transaction pending</p>
      <p className="mt-6 text-sm">Transaction ID</p>
      <p className="mt-2 text-sm font-medium text-primary-blue">{transactionId}</p>
      <p className="text-secon mt-7 px-10 text-sm text-secondary-dark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
      </p>
    </div>
    <Button label="Refresh" className="mx-auto mt-10" onClick={forceAcceptPayment} icon="/images/refresh-icon.png" />
  </div>
);

const mapStateToProps = state => ({
  transactionId: state.payment.transactionId
});

const mapDispatchToProps = {
  forceAcceptPayment
};

export default connect(mapStateToProps, mapDispatchToProps)(PendingPayment);
