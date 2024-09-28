export function ContactForm(): JSX.Element {
  return (
    <>
      <form
        id="contact-form"
        className="flex flex-col mx-5 mt-6 space-y-6 font-karla font-light text-xl tablet:m-auto desktop:space-y-10 desktop:text-3xl"
      >
        <label htmlFor="name">
          <input
            className="bg-gray-30 text-white focus:outline focus:outline-1 focus:outline-white placeholder:text-gray w-84 h-12 pl-5 rounded-3xl desktop:h-16 tablet:w-140 laptop:w-640 desktop:w-1024"
            id="name"
            type="text"
            placeholder="Name*"
            required
          />
        </label>
        <label htmlFor="email">
          <input
            className="bg-gray-30 text-white focus:outline focus:outline-1 focus:outline-white placeholder:text-gray w-84 h-12 pl-5 rounded-3xl desktop:h-16 tablet:w-140 laptop:w-640 desktop:w-1024"
            id="email"
            type="email"
            placeholder="Email*"
            required
          />
        </label>
        <label htmlFor="message">
          <textarea
            className="bg-gray-30 text-white focus:outline focus:outline-1 focus:outline-white placeholder:text-gray w-84 h-72 p-5 rounded-3xl desktop:h-104 tablet:w-140 laptop:w-640 desktop:w-1024"
            name="message"
            id="message"
            placeholder="Message*"
          />
        </label>
      </form>
      <label htmlFor="button" className="self-center my-5 desktop:my-12">
        <button
          className="w-20 text-gray text-xl hover:outline hover:text-white outline-2 outline-offset-2 rounded-3xl outline-white desktop:text-3xl desktop:w-24"
          id="button"
          form="contact-form"
          type="submit"
        >
          SEND
        </button>
      </label>
    </>
  );
}
