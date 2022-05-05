function Nav() {
    return (
        <nav className="bg-white main-nav">
                <div className="max-w-screen-lg mx-auto px-12">
                    <div className="flex justify-between">
                        <div className="flex space-x-12 logo-hr">
                            <div className="main-logo">
                                {/* <!-- Website Logo --> */}
                                <a href="#" className="flex items-center py-6 pr-2 nav-logo">
                                    <img src="/logo.png" className="mr-3 h-6 sm:h-8" alt="Logo" /><br /><span>Developing Potential, Delivering Success.</span>
                                </a>
                            </div>
                            <div className="vertical-line"></div>
                            {/* <!-- Primary Navbar items --> */}
                            <div className="hidden md:flex items-center space-x-1 primary-nav">
                                <a
                                    href=""
                                    className="py-4 pr-16 navfont"
                                    >Find Courses</a
                                >
                                <a
                                    href=""
                                    className="py-4 pr-16 navfont"
                                    >Categories</a
                                >
                                <a
                                    href=""
                                    className="py-4 pr-16 navfont"
                                    >Certificates</a
                                >
                                <a
                                    href=""
                                    className="py-4 pr-16 navfont"
                                    >Venues</a
                                >
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </nav>
    )
}

export default Nav;