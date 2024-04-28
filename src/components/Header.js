const Header = () => {
    return (
        <header>
          <div className="header-content">
            <div className="header-mobile">
              <a className="header-toggle"><i className="fas fa-bars"></i></a>
              <a href="#home">
                <h2 className="header-name">Sanjeev Kumar</h2>
              </a>
            </div>
            <div className="header-main" data-simplebar>
              <div className="image-container">
                <a href="#home">
                  <h2 className="header-name">Sanjeev Kumar</h2>
                </a>
                <img src="/assets/profile.png" alt="profile-pic" />
              </div>
              <nav className="nav-menu">
                <ul>
                  <li>
                    <a href="https://sanjeevkumar.web.app#home" className="pt-link"><span className="nav-menu-icon"><i className="lnr lnr-home"></i></span>Home
                    </a>
                  </li>
                  <li>
                    <a href="https://sanjeevkumar.web.app/#about" className="pt-link"><span className="nav-menu-icon"><i className="lnr lnr-user"></i></span>About Me</a>
                  </li>
                  <li>
                    <a href="https://sanjeevkumar.web.app/#resume" className="pt-link"><span className="nav-menu-icon"><i className="lnr lnr-license"></i></span>Resume</a>
                  </li>
                  <li>
                    <a href="https://sanjeevkumar.web.app/#portfolio" className="pt-link"><span className="nav-menu-icon"><i className="lnr lnr-briefcase"></i></span>Portfolio</a>
                  </li>
                  <li>
                    <a href="https://sanjeevkumar.web.app/#projects" className="pt-link"><span className="nav-menu-icon"><i className="lnr lnr-book"></i></span>Projects</a>
                  </li>
                  <li>
                    <a href="https://web3-sanjeevkumar.web.app/#code" className="pt-link"><span className="nav-menu-icon"><i className="lnr lnr-code"></i></span>Code snippets</a>
                  </li>
                  <li>
                    <a href="#tensorflow" className="pt-link active"><span className="nav-menu-icon"><i className="lnr lnr-sync"></i></span>Live TensorFlow</a>
                  </li>
                  <li>
                    <a href="https://sanjeevkumar.web.app/#contact" className="pt-link"><span className="nav-menu-icon"><i className="lnr lnr-envelope"></i></span>Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="nav-footer">
                <ul className="social">
                  <li>
                    <a href="https://www.linkedin.com/in/sanjeev-kumar-02/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCRQe7trbZM4iSrTP-pNtR-A" target="_blank"><i className="fa fa-youtube-square"></i></a>
                  </li>
                  <li>
                    <a href="https://github.com/sanjeev1379?tab=repositories" target="_blank"><i className="fa fa-github-square"></i></a>
                  </li>
                </ul>
                <div className="copy">
                  <p>2023 &copy; Sanjeev.Kumar<br />All Right Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </header>
    );
}

export default Header;