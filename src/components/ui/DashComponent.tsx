import React from "react";

const DashComponent = () => {
  return (
    <section className="text-blueGray-700 bg-white mt-20">
      <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
          <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
            {" "}
            SoulsSaga{" "}
          </h2>
          <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
            {" "}
            Did you know about the Souls{" "}
          </h1>
          <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
            {" "}
            In the Souls saga, including Bloodborne, mostly crafted by Miyazaki,
            we find truly intriguing plotlines that make us eager to learn more
            and see how their narrative unfolds. However, its their stories
            that are captivating, mysterious, debatable, and unique.{" "}
          </p>
          <div className="flex flex-col justify-center lg:flex-row">
            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              {" "}
              Show me{" "}
            </button>
            <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
              {" "}
              It will take you to the blog. <br className="hidden lg:block" />
              <a
                href="#"
                className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black"
                title="read more"
              >
                {" "}
                Read more about it »{" "}
              </a>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
          <img
            className="object-cover object-center rounded-lg "
            alt="hero"
            src="https://res.cloudinary.com/dqwaezbgg/image/upload/oaoo8l2rjxivopctytho.jpg"
          />
        </div>
      </div>
      <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
          <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
            {" "}
            Persona{" "}
          </h2>
          <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
            {" "}
            A saga that will get you hooked{" "}
          </h1>
          <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
            {" "}
            In the Persona saga, created predominantly by Atlus, we encounter
            narratives that are not only compelling but also leave us yearning
            for more insight into their intricacies. Yet, it is within their
            stories where the true allure lies—captivating, enigmatic, subject
            to debate, and utterly distinctive.{" "}
          </p>
          <div className="flex flex-col justify-center lg:flex-row">
            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              {" "}
              Show me{" "}
            </button>
            <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
              {" "}
              It will take you to the blog. <br className="hidden lg:block" />
              <a
                href="#"
                className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black"
                title="read more"
              >
                {" "}
                Read more about it »{" "}
              </a>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
          <img
            className="object-cover object-center rounded-lg "
            alt="hero"
            src="https://res.cloudinary.com/dqwaezbgg/image/upload/s91qtkqsv1ptclkoxcf4.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default DashComponent;
