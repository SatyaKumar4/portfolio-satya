import twitter from '../assets/twitter-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import github from '../assets/github-icon.png'

const Contact = () => {
    return (
        <div id="Contact" className="Contact-container">
            <h1 className="contact-heading">Contact</h1>
            <div className="contact">
                <a className="btn" href="mailto: satyakumars@outlook.com">Mail-me</a>
                <div className="social-links">
                    <a className="footer-link" href="https://www.linkedin.com/in/satya-kumar-s/">
                        <img src={linkedin} className='social-icon' />
                    </a>
                    <a className="footer-link" href="https://twitter.com/Satya_nanadaime">
                        <img src={twitter} className='social-icon'/>
                    </a>
                    <a className="footer-link" href="https://github.com/SatyaKumar4">
                        <img src={github} className='social-icon'/>
                    </a>
                </div>
                <p>© SATYA KUMAR.</p>
            </div>
        </div>
    )
}

export default Contact;