import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import React from 'react'
import SocialIcon from './SocialIcon'
import siteMetadata from '@/data/siteMetadata'

function SocialMedia({ color }) {
  return (
    <div className="flex justify-center mt-6 lg:justify-start lg:pl-2">
      <SocialIcon icon={faTwitter} url={siteMetadata.twitter} color={color} />
      <SocialIcon icon={faFacebook} url={siteMetadata.facebook} color={color} />
      <SocialIcon icon={faInstagram} url={siteMetadata.instagram} color={color} />
      <SocialIcon icon={faTwitch} url={siteMetadata.twitch} color={color} />
      <SocialIcon icon={faYoutube} url={siteMetadata.youtube} color={color} />
    </div>
  )
}

export default SocialMedia
