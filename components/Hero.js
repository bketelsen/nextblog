import SubscribeCTA from './SubscribeCTA'
import SocialMedia from './SocialMedia'

function Hero() {
  return (
    <div className="flex flex-col items-center max-w-6xl px-6 mx-auto lg:flex-row lg:justify-around lg:px-20 lg:py-2">
      <div className="w-full py-4 mx-auto text-center lg:text-left sm:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white xs:text-3xl sm:text-4xl md:text-5xl">
          Hi - I'm Brian.
          <br /> Welcome to my blog!
        </h2>
        <p className="mt-6 text-base text-gray-600 font-body dark:text-gray-300 sm:text-lg md:text-xl">
          Stuff about me. Get more <span className="text-palette-primary">here</span>.
        </p>
        <p className="mt-6 text-base text-gray-600 font-body dark:text-gray-300 sm:text-lg md:text-xl">
          Please subscribe and follow me on social media to stay updated about my shenanigans.
        </p>
        <SubscribeCTA />
        <SocialMedia color="dark" />
      </div>
      <div className="w-full my-8 lg:m-0 lg:w-1/2">
        <img
          height={600}
          width={600}
          className="object-cover w-64 h-64 mx-auto rounded-full shadow lg:h-96 lg:w-96 lg:mr-0"
          src="/images/main-img.jpg"
          alt="main-img"
        />
      </div>
    </div>
  )
}

export default Hero
