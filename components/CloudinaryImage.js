import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url'

export default function CloudinaryImg({ publicId, height, width, alt }) {
  publicId = 'static/images/' + publicId

  const url = buildUrl(publicId, {
    cloud: {
      cloudName: 'bketelsen',
    },
  })

  return <Image width={width} height={height} src={url} alt={alt} />
}
