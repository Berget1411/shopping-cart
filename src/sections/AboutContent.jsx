const AboutContent = () => {
  return (
    <section className='flex justify-center max-container'>
      <div className='flex flex-col flex-wrap w-full gap-2 pt-28 max-xl:padding-x'>
        <div>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold max-sm:text-4xl'>
            About <span className='text-emerald-600'>Us</span>
          </h1>
          <p className='font-montserrat text-emerald-600 text-xl leading-8 mt-6 mb-2 border-b-2 pb-7 max-sm:text-lg'>
            Welcome to SwiftCart, your ultimate destination for all things
            trendy!
          </p>
        </div>
        <div className='flex flex-col gap-4 info-text max-sm:text-sm'>
          <p>
            At SwiftCart, we're passionate about helping you discover the latest
            accessories, fashion must-haves, and cutting-edge electronics—all
            conveniently available at your fingertips. Whether you're searching
            for the perfect statement piece to elevate your style or the newest
            gadget to enhance your tech collection, we've got you covered.
          </p>
          <p>
            Our curated selection of products is designed to cater to every
            taste and preference, ensuring that you'll find exactly what you're
            looking for. From chic handbags and stylish jewelry to
            state-of-the-art gadgets and sleek electronics, our diverse range
            has something for everyone.
          </p>
          <p>
            But that's not all—shopping with us comes with perks! With our
            rewards program, you can earn points with every purchase, bringing
            you one step closer to exclusive discounts and special offers. It's
            our way of saying thank you for choosing SwiftCart as your go-to
            online shopping destination.
          </p>
          <p>
            So why wait? Start exploring our collection today and discover the
            perfect fit for your lifestyle. Happy shopping!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
