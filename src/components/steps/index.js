import { connect } from 'react-redux';
import AnsweredQuestions from 'components/steps/answered';
import SelectCrypto from 'components/steps/questions/select-crypto';
import SelectPromo from 'components/steps/questions/select-promo';
import SendPayment from 'components/steps/questions/send-payment';
import Transaction from 'components/steps/transaction';

const Steps = ({ currentQuestion }) =>
  currentQuestion ? (
    <div className="mt-5">
      <AnsweredQuestions />
      <SelectCrypto />
      <SelectPromo />
      <SendPayment />
    </div>
  ) : (
    <Transaction />
  );

const mapStateToProps = state => ({ currentQuestion: state.questions.currentQuestion });

export default connect(mapStateToProps)(Steps);
