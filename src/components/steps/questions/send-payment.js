import { connect } from 'react-redux';
import { nextQuestion } from 'redux/actions/questions';
import { sendPayment } from 'redux/actions/payment';
import Button from 'components/button';
import Total from 'components/total';
import { toast } from 'react-toastify';

const SendPayment = ({ currentQuestion, nextQuestion, sendPayment, paymentAddress }) =>
  currentQuestion === 'pay' && (
    <>
      <Total />
      <div className="mt-10">
        <p className="text-primary-dark mb-5 text-[17px] font-medium">Send payment to</p>
        <div className="flex">
          <div className="w-full border border-[#D7D8DA] bg-white px-4 py-3 text-sm text-secondary-dark">
            {paymentAddress}
          </div>
          <Button
            label="Copy"
            className="px-8"
            onClick={() => {
              navigator.clipboard.writeText(paymentAddress);
              toast('Copied to clipboard!');
            }}
          />
        </div>
      </div>
      <Button
        onClick={() => {
          nextQuestion();
          sendPayment();
        }}
      />
    </>
  );

const mapStateToProps = state => ({
  currentQuestion: state.questions.currentQuestion,
  paymentAddress: state.payment.paymentAddress
});

const mapDispatchToProps = {
  nextQuestion,
  sendPayment
};

export default connect(mapStateToProps, mapDispatchToProps)(SendPayment);
