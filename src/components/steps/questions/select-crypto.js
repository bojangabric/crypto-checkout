import { useEffect, useState } from 'react';
import Total from 'components/total';
import { connect } from 'react-redux';
import { nextQuestion, updateQuestion } from 'redux/actions/questions';
import { setTotal, getCurrencies } from 'redux/actions/payment';
import Options from 'components/steps/questions/options';
import Button from 'components/button';

const SelectCrypto = ({ setTotal, updateQuestion, currentQuestion, nextQuestion, getCurrencies, currencies }) => {
  const [chosen, setChosen] = useState();
  const labels = currencies.map(c => c.currency);

  const chooseOption = e => {
    setChosen(currencies[e]);
  };

  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  useEffect(() => {
    setTotal(chosen);
  }, [chosen]);

  return (
    currentQuestion === 'select-crypto' && (
      <div>
        <Options
          label="Select your crypto currency"
          options={labels}
          chosen={chosen?.currency}
          onClick={chooseOption}
        />
        <Total />
        <Button
          onClick={() => {
            if (chosen) {
              updateQuestion(chosen.currency);
              nextQuestion();
            }
          }}
        />
      </div>
    )
  );
};

const mapStateToProps = state => ({
  currentQuestion: state.questions.currentQuestion,
  currencies: state.payment.currencies
});

const mapDispatchToProps = {
  setTotal,
  nextQuestion,
  updateQuestion,
  getCurrencies
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCrypto);
