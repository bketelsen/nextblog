import Image from 'next/image'
import Link from 'next/link'
import { formatContentfulDate } from '../utils/helpers'

function PostPreview({ slug, date, tags, featured, image, title, description }) {
  const postHref = `/blog/${slug}`

  return (
    <Link href={postHref} passHref>
      <div className="shadow-lg hover:shadow-2xl card">
        <figure>
          {image && (
            <Image
              className="object-cover w-full h-48 rounded"
              width="800"
              height="450"
              alt={title}
              src={image}
            />
          )}{' '}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {featured && <div className="mb-2 uppercase badge badge-accent">featured</div>}
          <p className="mb-2"> {formatContentfulDate(date)}</p>
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
            <button className="btn btn-ghost">View Post</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostPreview