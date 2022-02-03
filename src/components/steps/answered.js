import { connect } from 'react-redux';
import { gotoQuestion } from 'redux/actions/questions';

const AnsweredQuestion = ({ icon, answer, number, onClick }) => (
  <div className="flex items-center bg-white px-6 py-3.5 text-sm font-medium drop-shadow-button">
    <img src={icon} />
    <p className="text-primary-dark ml-2.5">{answer}</p>

    <button
      className="ml-auto font-medium text-primary-blue"
      onClick={() => {
        // disable 'Change' on the first one because it's always "Crypto currency"
        if (answer !== 'Crypto currency') onClick(number);
      }}
    >
      Change
    </button>
  </div>
);

const AnsweredQuestions = ({ answeredQuestions, gotoQuestion }) => (
  <div className="mt-5 space-y-5">
    {answeredQuestions.map(question => (
      <AnsweredQuestion
        key={question.answer}
        icon={question.icon}
        answer={question.answer}
        number={question.number}
        onClick={gotoQuestion}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({ answeredQuestions: state.questions.answeredQuestions });

const mapDispatchToProps = {
  gotoQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(AnsweredQuestions);
