import Image from 'next/image'
import SocialMedia from './SocialMedia'
import SubscribeCTA from './SubscribeCTA'

function Hero() {
  return (
    <div className="flex flex-col items-center max-w-6xl px-6 mx-auto lg:flex-row lg:justify-around lg:px-20 lg:py-2">
      <div className="w-full py-4 mx-auto text-center lg:text-left sm:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-extrabold text-base-content xs:text-3xl sm:text-4xl md:text-5xl">
          Hi - I'm Brian.
          <br /> Welcome to my blog!
        </h2>
        <p className="mt-6 text-base text-base-content font-body sm:text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis id. nullam
          eget felis eget. Lacus suspendisse faucibus interdum posuere lorem ipsum. Sed sed sed
          risus pretium quam vulputate dignissim.
        </p>
        <p className="mt-6 text-base text-base-content font-body sm:text-lg md:text-xl">
          Please subscribe and follow me on social media to stay updated about my shenanigans.
        </p>
        <SubscribeCTA />
        <SocialMedia color="dark" />
      </div>
      <div className="w-full my-8 lg:m-0 lg:w-1/2">
        <Image
          height={600}
          width={600}
          className="object-cover w-64 h-64 mx-auto rounded-full shadow lg:h-96 lg:w-96 lg:mr-0"
          src="/static/images/brian-head.jpeg"
          alt="Brian Ketelsen"
        />
      </div>
    </div>
  )
}

export default Hero
