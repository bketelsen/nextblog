import React from 'react'
import SocialIcon from './SocialIcon'
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

function SocialMedia({ color }) {
  return (
    <div className="flex justify-center mt-6 lg:justify-start lg:pl-2">
      <SocialIcon icon={faTwitter} url={process.env.twitterUrl} color={color} />
      <SocialIcon icon={faFacebook} url={process.env.facebookUrl} color={color} />
      <SocialIcon icon={faInstagram} url={process.env.instagramUrl} color={color} />
      <SocialIcon icon={faTwitch} url={process.env.twitchUrl} color={color} />
      <SocialIcon icon={faYoutube} url={process.env.youtubeUrl} color={color} />
    </div>
  )
}

export default SocialMedia
