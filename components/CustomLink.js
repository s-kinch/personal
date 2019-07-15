import Link from 'next/link'

export default ({href, children}) => (
    <Link 
        href={href} 
        as={`${process.env.NODE_ENV === 'production' ? '/personal/' : ''}${href}`}
    >
        {children}
    </Link>
)