const Option = ({ answer, chosen, onClick }) => (
  <div
    className="mb-px flex cursor-pointer items-center bg-white px-6 py-5 text-lg font-bold transition hover:bg-opacity-70"
    onClick={onClick}
  >
    {chosen ? <img src="/images/checkmark.png" /> : <div className="h-[27px] w-[27px] rounded-full bg-[#EDEFF0]"></div>}
    <p className="ml-2.5 text-medium-gray">{answer}</p>
  </div>
);

const Options = ({ label, options, chosen, onClick }) => (
  <div className="mt-10 drop-shadow-button">
    <p className="text-primary-dark mb-5 text-[17px] font-medium">{label}</p>
    {options.map((option, i) => (
      <Option key={i} answer={option} chosen={chosen === option} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Options;
