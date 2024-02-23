import React from "react";

const AboutComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="flex flex-col items-center md:flex-row md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" />
          </div>
          <div className="md:w-7/12 lg:w-6/12 text-center md:text-left">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">About AlexandriArcade</h2>
            <p className="mt-6 text-gray-600">
              AlexandriArcade is your ultimate destination for all things video games. We are passionate gamers who love to
              explore every facet of the gaming world, from classic titles to the latest releases. Our mission is to provide
              a platform where gamers can come together to discover, discuss, and celebrate their shared love for gaming.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you are a casual player looking for recommendations or a hardcore gamer seeking in-depth analysis, you will
              find something here at AlexandriArcade. Join us on our journey through the vast landscape of video games,
              where every pixel tells a story and every achievement is a triumph.
            </p>
            <p className="mt-4 text-gray-600">
              Thank you for being a part of our community. Lets continue to game on and forge unforgettable memories together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
