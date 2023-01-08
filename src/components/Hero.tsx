const Hero = () => {
  return (
    <div className='w-full h-screen bg-[url("/fondo1.jpeg")] bg-cover bg-center relative'>
      <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-center h-full w-full flex-col gap-y-3">
          <h2 className="text-white text-4xl font-semibold">Men Clothes</h2>
          <p className="text-white text-2xl">Do you want to look better?</p>
          <a
            href="#shop"
            className="uppercase border border-red-500 hover:bg-red-500 transition-all px-2 py-2 text-white hover:bg"
          >
            Shop now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
