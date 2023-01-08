import useTime from "../hooks/useTime";

const Counter = () => {
  const { time } = useTime();

  return (
    <div className='my-20 w-5/6 mx-auto h-96 bg-[url("/fondo2.jpeg")] bg-cover relative'>
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col items-center">
        <h2 className="text-white text-4xl text-center mt-5 font-semibold">
          Our winter collection wil be available in
        </h2>

        <div className="flex items-center h-full w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-5">
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-3xl font-semibold">{time.days}</p>
              <p className="text-white text-2xl font-semibold">Days</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-3xl font-semibold">{time.hours}</p>
              <p className="text-white text-2xl font-semibold">Hours</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-3xl font-semibold">
                {time.minutes}
              </p>
              <p className="text-white text-2xl font-semibold">Minutes</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-3xl font-semibold">
                {time.seconds}
              </p>
              <p className="text-white text-2xl font-semibold">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
