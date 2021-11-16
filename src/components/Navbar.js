import './Navbar.scss';
import { Avatar } from 'antd';
import { UserOutlined, PieChartOutlined, HomeOutlined, AppstoreAddOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    return (
        <header className="header">
            <Logo />

            <nav className="menu">
                <NavLink exact to="/" activeClassName="active"><HomeOutlined /></NavLink>
                <NavLink to="/workouts" activeClassName="active"><AppstoreAddOutlined /></NavLink>
                <NavLink to="/register" activeClassName="active"><PieChartOutlined /></NavLink>
                <NavLink to="/login" activeClassName="active"><SettingOutlined /></NavLink>
            </nav>

            <div className="profile">
                <Avatar size="large" icon={<UserOutlined />} />
            </div>
        </header>
    )
};

export default Navbar;