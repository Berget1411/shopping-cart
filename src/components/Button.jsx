const Button = ({ label, iconURL }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-emerald-600 rounded-full text-white border-emerald-600 hover:brightness-110 transition'>
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