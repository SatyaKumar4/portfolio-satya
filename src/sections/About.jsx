import profile from '../assets/SatyaCircle3.png'

const About = () => {
    return (
        <div id="About">
            <h1 className="about-heading">About me</h1>
            <div className="AboutSection">
            <img src= {profile} alt="Satya" className='about-pic'/>
            <p className='about-me'>Hi there! My name is Satya Kumar and I am a Web Developer. I am passionate about front-end development.

                My goal currently is to be the best front-end dev that I can be. I am constantly working towards this goal
                by trying to evolve daily, equipping myself by learning new tech, frameworks, libraries and I am always
                looking for new opportunities to learn and grow.

                In my free time, I enjoy doing pet coding projects, play football, and do pencil sketching. I also love
                reading books.

                Thank you for taking the time to read about me, and I look forward to connecting with you!</p>
            </div>
           
        </div>
    )
}

export default About;
