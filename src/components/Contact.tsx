import React from "react";

const Contact = () => {

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
  }


  return (
    <section id="contact" className="my-20">
      <h2 className="text-3xl font-semibold text-center">Contact</h2>

      <div className="h-[400px] w-5/6 mx-auto flex mt-10">
        <div className="w-1/2 bg-[#a8b2a3]">
          <form onSubmit={onSubmit} className="px-5 py-5 space-y-2">
            <div className="flex flex-col">
              <label  htmlFor="name">Name</label>
              <input required className="border border-black px-2 py-1" type="text" id="name" />
            </div>

            <div className="flex flex-col">
              <label  htmlFor="last">lastName</label>
              <input required className="border border-black px-2 py-1" type="text" id="last" />
            </div>

            <div className="flex flex-col">
              <label  htmlFor="email">Email</label>
              <input required className="border border-black px-2 py-1" type="text" id="email" />
            </div>

            <div className="flex flex-col">
              <label  htmlFor="message">Message</label>
                <textarea className="border border-black resize-none" id="message" name="message" rows={4}></textarea>
            </div>

            <button type="submit" className="bg-red-500 text-white w-full p-2">Submit</button>

          </form>
        </div>

        <div className="w-1/2 ">
          <img
            src="form.jpeg"
            className="h-full w-full object-cover object-top"
            alt="form image"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
