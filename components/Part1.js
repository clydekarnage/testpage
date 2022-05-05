function Part1() {
    return (
        <>
            <div className="max-w-screen-lg mx-auto px-12 mt-4">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-start-1 col-end-4 part1-border">
                        <div className="part1-small">
                            <h3>An Interactive 3 - Day Online Training Course</h3>
                        </div>
                        <div className="part1-big">
                            <h1>Advanced Accident<br />Investigation & Reporting</h1>
                        </div>
                    </div>
                    <div className="colspan-3">
                        <div className="part1-date">
                            <h2 className="firstdate">04 - 06 October 2021</h2>
                            <h2 className="seconddate">09:00 to 14:00 Dubai [GMT 4]</h2>
                            <a
                                    href=""
                                    className="py-2 px-12 text-white bg-red-500 border-1 border-red-500 sign_in"
                                    >REGISTER NOW</a
                                >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Part1;