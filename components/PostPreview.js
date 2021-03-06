import Image from './CloudinaryImage'
import Link from 'next/link'
import { formatDate } from '../utils/helpers'

function PostPreview({ path, slug, date, tags, featured, image, title, description }) {
  const postHref = `/${path}/${slug}`
  return (
    <Link href={postHref} passHref>
      <div className="shadow-md cursor-pointer hover:shadow-2xl card">
        <figure>
          {image && (
            <Image
              className="object-cover w-full h-48 rounded"
              width={image.width}
              height={image.height}
              alt={title}
              publicId={image.id}
            />
          )}{' '}
        </figure>
        <div className="card-body hover:bg-accent">
          <h2 className="card-title">{title}</h2>
          {featured && <div className="mb-2 uppercase badge badge-accent">featured</div>}
          <p className="mb-2"> {formatDate(date)}</p>
          <p>{description}</p>
          <div className="justify-center pt-2">
            {tags &&
              tags.map((tag, index) => (
                <div key={index} className="mb-2 mr-2 uppercase badge badge-secondary">
                  {tag}
                </div>
              ))}
          </div>
          <div className="justify-end card-actions">
            <button className="btn btn-ghost">View</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostPreview
