import React, {FC} from 'react';
import styles from './SideBar.module.scss'
import Input from "../UI/Input";
import Avatar from '../../assets/img/sideBar/avatar.svg'
import Chats from '../../assets/img/sideBar/chats.svg'
import Profile from '../../assets/img/sideBar/profile.svg'
import Contacts from '../../assets/img/sideBar/contacts.svg'
import SideBarChat from "./SideBarChat/SideBarChat";



const Sidebar: FC = () => {
    return (
        <div className={styles.sideBar}>
            <header className={styles.sideBarHeader}>
                <div className={styles.userInfo}>
                    <img src={Avatar} alt="img"/>
                    <span>Kokojamba</span>
                </div>
            </header>

            <div className={styles.sideBarSearch}>
                <Input type="text" placeholder='Поиск...'/>
            </div>
            <div className={styles.sideBarChats}>
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />

            </div>

            <div className={styles.sideBarNav}>
                <img src={Contacts} alt="img"/>
                <img src={Chats} alt="img"/>
                <img src={Profile} alt="img"/>
            </div>
        </div>
    );
};

export default Sidebar;