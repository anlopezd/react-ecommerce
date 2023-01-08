
const About = () => {
  return (
    <section id="about" className="sm:h-1/2 w-full py-5 ">
      <h2 className="text-black text-3xl text-center font-semibold uppercase">
        About Us
      </h2>
      <div className="w-full flex sm:flex-row flex-col mt-10 bg-[#cad2c5]">
        <div className='bg-[url("/about.jpeg")] bg-center bg-cover min-h-[400px] sm:w-1/2 w-full'></div>
        <div className="sm:w-1/2 w-full">
          <p className="text-center text-2xl text-black font-bold py-5">
            About us
          </p>
          <div className="space-y-5 py-5 px-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugit hic impedit exercitationem tenetur fuga ratione saepe
              laboriosam ad iusto voluptatum voluptas sunt ipsa commodi velit
              necessitatibus adipisci, doloribus architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugit hic impedit exercitationem tenetur fuga ratione saepe
              laboriosam ad iusto voluptatum voluptas sunt ipsa commodi velit
              necessitatibus adipisci, doloribus architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugit hic impedit exercitationem tenetur fuga ratione saepe
              laboriosam ad iusto voluptatum voluptas sunt ipsa commodi velit
              necessitatibus adipisci, doloribus architecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
