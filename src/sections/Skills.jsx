import HtmlImg from '../assets/html5-icon.png';
import cssIcon from '../assets/css3-icon.png';
import jsIcon from '../assets/javascript-icon.png';
import reactIcon from '../assets/react-icon.png';
import nodeIcon from '../assets/node-icon.png';
import mongoIcon from '../assets/mongo-dB-icon.png';

const skillData = [
    {
        name: 'HTML5',
        icon: HtmlImg,
        id: 1

    },
    {
        name: 'CSS3',
        icon: cssIcon,
        id: 2

    },
    {
        name: 'JavaScript',
        icon: jsIcon,
        id: 3
    },
    {
        name: 'React',
        icon: reactIcon,
        id: 4
    },
    {
        name: 'Node',
        icon: nodeIcon,
        id: 5
    },
    {
        name: 'MongoDB',
        icon: mongoIcon,
        id: 6
    }
]

const Skills = () => {

    return (
        <div className='skills-container'>
            <h1 className="skill-section-heading">Skills</h1>

            <div className="SkillDisplay" id="Skills">

                {skillData.map((skill) => {
                    const { name, icon, id } = skill
                    return <SkillDiv key={id} name={name} icon={icon} />

                })}
            </div>
        </div>

    )
}


export const SkillDiv = (skillData) => {
     const {name, icon} = skillData

    return (
        <div>
            <div className='skill-container'>
                <img src={icon} alt="HTML icon" className='skill-icon' />
                <p className='skill-name'>{name}</p>
            </div>
        </div>
    )
}

export default Skills;