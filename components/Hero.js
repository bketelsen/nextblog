import Image from 'next/image'
import SocialMedia from './SocialMedia'
import SubscribeCTA from './SubscribeCTA'

function Hero() {
  return (
    <div className="min-h-50 hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <Image
          height={600}
          width={600}
          className="max-w-xs rounded-lg shadow-2xl"
          src="/static/images/brian-head.jpeg"
          alt="Brian Ketelsen"
        />
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            {' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>{' '}
            I'm Brian
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis
            id. nullam eget felis eget..
          </p>
          <button className="btn btn-primary">More About Me</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
