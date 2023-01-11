const Navbar = () => {
    return (
        <section className="nav">
            <div className="nav__left">
                <input className="nav__button nav__buttonWhite" type="button" name="over" value="Over" />
                <input className="nav__button nav__buttonWhite" type="button" name="over" value="Features" />
                <input className="nav__button nav__buttonWhite" type="button" name="over" value="Prijs" />
                <input className="nav__button nav__buttonWhite" type="button" name="over" value="Contact" />
                <a className="nav__button nav__buttonWhite" href="/">Home</a>
                <a className="nav__button nav__buttonWhite" href="/collectie">Over</a>
            </div>
            <div className="nav__right">
                <input className="nav__button nav__buttonBlue" type="button" name="over" value="login" />
            </div>
        </section>
    )
}

export default Navbar;