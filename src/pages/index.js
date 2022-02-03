import Info from 'components/info';
import Checkout from 'components/checkout';

const IndexPage = () => (
  <div className="min-h-screen bg-[#F9F9F9]">
    <div className="mx-auto flex min-h-screen max-w-[920px]">
      <Checkout />
      <Info />
    </div>
  </div>
);

export default IndexPage;
