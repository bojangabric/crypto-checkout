import { connect } from 'react-redux';

const Total = ({ total }) => (
  <div className="mt-10">
    <p className="text-primary-dark mb-5 text-[17px] font-medium">Total</p>
    <div className="mb-px flex items-center bg-white px-6 py-5 text-lg font-bold">
      {total?.currency ? (
        <>
          <p className="text-medium-gray">{total.currency}</p>
          <p className="ml-2.5 text-[#828282]">{total.price}</p>
        </>
      ) : (
        <p className="font-normal text-gray-500">Choose a currency above</p>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({ total: state.payment.total });

export default connect(mapStateToProps)(Total);
