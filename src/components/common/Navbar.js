import Logo from '../../assets/img/LogoNavbar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
const baseUrl = 'http://localhost:3000';

export const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="LogoNavbar"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} size="lg" style={{ color: 'black' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">BERANDA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={baseUrl + '#acara'}>AGENDA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={baseUrl + '#timeline'}>LINIMASA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/faq">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={baseUrl + '#kontak'}>KONTAK</a>
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