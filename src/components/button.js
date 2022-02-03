const Button = ({ label = 'Next', className, onClick, icon }) => (
  <button
    className={`${
      className || 'mt-12'
    } ml-auto flex items-center bg-primary-blue px-12 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-blue-500`}
    onClick={onClick}
  >
    {icon && <img src={icon} className="mr-1" />}
    {label}
  </button>
);

export default Button;
