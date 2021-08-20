import Image from 'next/image'
import Link from './Link'

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
            I'm a life-long developer, systems engineer, and IT leader who thrives on experimenting,
            learning, and teaching.
          </p>
          <Link role="button" className="btn btn-primary" href="/about">
            More About Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
