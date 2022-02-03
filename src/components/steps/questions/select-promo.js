import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { nextQuestion, updateQuestion } from 'redux/actions/questions';
import { getPaymentAddress, getPromos } from 'redux/actions/payment';
import Button from 'components/button';
import Options from 'components/steps/questions/options';
import Total from 'components/total';

const SelectPromo = ({
  updateQuestion,
  currentQuestion,
  nextQuestion,
  getPromos,
  promos,
  total,
  getPaymentAddress
}) => {
  const [chosen, setChosen] = useState();

  const chooseOption = e => {
    setChosen(promos[e]);
  };

  useEffect(() => {
    getPromos();
  }, [getPromos]);

  return (
    currentQuestion === 'select-promo' && (
      <div>
        <Total />
        <Options label="Select promo" options={promos} chosen={chosen} onClick={chooseOption} />
        <Button
          onClick={() => {
            if (chosen) {
              updateQuestion(chosen);
              getPaymentAddress(total, chosen);
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
  total: state.payment.total,
  promos: state.payment.promos
});

const mapDispatchToProps = {
  updateQuestion,
  nextQuestion,
  getPaymentAddress,
  getPromos
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPromo);
