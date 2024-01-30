const LoadingWheel = () => {
  return (
    <div className='absolute left-[50%] top-[30%]'>
      <div className='flex justify-center items-center h-20 w-20 mb-5 rounded-full bg-gradient-to-tr border-8 border-primary border-t-emerald-600 border-b-slate-gray  animate-spin'>
        <div className='w-14 h-14 bg-white rounded-full'></div>
      </div>
      <p className='text-emerald-600 text-center text-2xl'>Loading...</p>
    </div>
  );
};

export default LoadingWheel;
