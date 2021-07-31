import NextImage from 'next/image'
const myLoader = ({ src, width, quality }) => {
  return `https://api.brian.dev/${src}?w=${width}&q=${quality || 75}`
}
// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <NextImage loader={myLoader} {...rest} />

export default Image
