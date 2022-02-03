import Button from 'components/button';

const SuccessfulPayment = () => (
  <div>
    <div className="mt-10 bg-white px-[43px] py-[50px] text-center drop-shadow-button">
      <img src="/images/success.png" className="mx-auto" />
      <p className="mt-4 text-[26px] font-medium">Payment successful</p>
      <p className="mt-5 text-sm text-secondary-dark">
        Nullam placerat erat volutpat mollis congue. Nunc felis libero, interdum eu purus eget, posuere porttitor nisi.
        Suspendisse potenti. Etiam ut lectus augue.
      </p>
      <Button label="HOME" className="mx-auto mt-7" onClick={() => window.location.reload(false)} />
    </div>
  </div>
);

export default SuccessfulPayment;
