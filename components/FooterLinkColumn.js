import Link from 'next/link'

function FooterLinkColumn({ items }) {
  return (
    <div className="w-full px-4 my-8 ml-auto lg:my-0 lg:w-4/12">
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link} passHref>
              <a className="block py-2 font-semibold hover:text-primary focus:outline-none">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinkColumn
