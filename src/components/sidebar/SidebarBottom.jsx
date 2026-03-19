import React from "react";
import { Dropdown, Divider } from "antd";
import { 
    SettingOutlined, 
    LogoutOutlined, 
    RocketOutlined, 
    ControlOutlined, 
    UserOutlined, 
    QuestionCircleOutlined,
    RightOutlined
} from "@ant-design/icons";

function SidebarBottom({ collapsed, currentTheme, user, setSettingsOpen, logout }) {
    const menuItems = [
        {
            key: 'user-info',
            label: (
                <div className="menu-user-header">
                    <div className="user-avatar mini-avatar">
                        {user?.first_name
                            ? `${user.first_name.charAt(0).toUpperCase()}${user.last_name.charAt(0).toUpperCase()}`
                            : (user?.email ? user.email.charAt(0).toUpperCase() : 'U')}
                    </div>
                    <div className="user-info-text">
                        <div className="user-info-name">{user?.first_name ? `${user.first_name} ${user.last_name || ''}` : 'User'}</div>
                        <div className="user-info-email">{user?.email || 'user@example.com'}</div>
                    </div>
                </div>
            ),
            disabled: true,
            className: 'user-info-item'
        },
        { type: 'divider' },
        {
            key: 'upgrade',
            label: 'Upgrade plan',
            icon: <RocketOutlined />,
            className: 'dropdown-menu-item'
        },
        {
            key: 'personalization',
            label: 'Personalization',
            icon: <ControlOutlined />,
            className: 'dropdown-menu-item'
        },
        {
            key: 'profile',
            label: 'Profile',
            icon: <UserOutlined />,
            className: 'dropdown-menu-item'
        },
        {
            key: 'settings',
            label: 'Settings',
            icon: <SettingOutlined />,
            onClick: () => setSettingsOpen(true),
            className: 'dropdown-menu-item'
        },
        { type: 'divider' },
        {
            key: 'help',
            label: (
                <div className="help-menu-content">
                    <span>Help</span>
                    <RightOutlined className="help-arrow-icon" />
                </div>
            ),
            icon: <QuestionCircleOutlined />,
            className: 'dropdown-menu-item'
        },
        {
            key: 'logout',
            label: 'Log out',
            icon: <LogoutOutlined />,
            onClick: logout,
            className: 'dropdown-menu-item logout-item'
        },
    ];

    return (
        <div className="user-profile-section">
            <Dropdown
                menu={{ items: menuItems }}
                trigger={['click']}
                placement="topRight"
                overlayClassName="chatgpt-profile-dropdown"
            >
                <div
                    className={`gemini-menu-item ${collapsed ? 'user-profile-card-collapsed' : 'user-profile-card-expanded'} ${currentTheme === 'dark' ? 'profile-card-bg-dark' : 'profile-card-bg-light'}`}
                >
                    <div className="user-avatar">
                        {user?.first_name
                            ? `${user.first_name.charAt(0).toUpperCase()}${user.last_name.charAt(0).toUpperCase()}`
                            : (user?.email ? user.email.charAt(0).toUpperCase() : 'U')}
                    </div>

                    {!collapsed && (
                        <div className="user-name-container">
                            <span className="user-name-text">
                                {user?.first_name ? `${user.first_name} ${user.last_name || ''}` : 'User'}
                            </span>
                        </div>
                    )}
                </div>
            </Dropdown>
        </div>
    );
}

export default SidebarBottom;
