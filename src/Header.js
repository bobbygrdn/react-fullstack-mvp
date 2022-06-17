import GordonMedia from './img/Gordon Media.png';

const Header = () => {
    return (
        <div className="header">
          <h1 className="title">Gordon Gym Trainer!</h1>
          <img src={GordonMedia} alt="none" className='icon' />
        </div>
    )
}

export default Header