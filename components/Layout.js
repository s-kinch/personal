import Link from 'next/link'

const Layout = ({ children }) => (
    <>
        <nav>
            <h1>
                <span className="emdash">—</span>
                <Link href="/">sinclair</Link>
            </h1>
        </nav>
        <div className="page-content">{children}</div>
    </>
)

export default Layout
