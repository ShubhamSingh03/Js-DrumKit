/*************************************
 *
 * Common Button component
 *
 *************************************/

const Button = ({ btnName, className }) => {
  return (
    <>
      <button
        className={`block rounded-lg bg-buttonColor px-5 py-3 text-sm font-medium text-buttonText transition hover:bg-[#eb7724] focus:outline-0 ${className}`}
        type="button"
      >
        {btnName}
      </button>
    </>
  );
};

export default Button;
