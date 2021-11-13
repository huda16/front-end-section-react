import Logo from '../../assets/img/LogoNavbar.svg';

export const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={Logo}></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">BERANDA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">AGENDA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">LINIMASA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">KONTAK</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <button className="btn btn-warning">
                            DAFTAR PESERTA
                        </button>
                    </span>
                </div>
            </div>
        </nav>
        </>
    );
}