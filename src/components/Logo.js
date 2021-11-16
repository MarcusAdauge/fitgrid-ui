import './Logo.scss';

const Logo = ({ flat = false, large = false }) => {
    return (
        <span className={`logo ${flat ? 'flat' : ''} ${large ? 'large' : ''}`}>
            <span className="primary">fit</span>
            <span className="secondary">grid</span>
            <span className="primary">.</span>
        </span>
    );
};

export default Logo;