const Layout = ({ children }) => (
    <>
        <nav>
            <h1>
                <span className="emdash">—</span>sinclair
            </h1>
        </nav>
        <div className="page-content">{children}</div>
    </>
)

export default Layout
