const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  eventListener,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-emerald-600 text-white border-emerald-600 '
      }
      ${fullWidth && 'w-full'}
      hover:brightness-110 transition`}
      onClick={eventListener}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow-right icon'
          className='ml-2 rounded-full w-5 h-5  bg-white'
        />
      )}
    </button>
  );
};

export default Button;
