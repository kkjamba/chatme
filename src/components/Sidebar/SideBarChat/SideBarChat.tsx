import React, {FC} from 'react';
import styles from './SideBarChat.module.scss'
import Avatar from '../../../assets/img/sideBar/avatar.svg'


const SideBarChat: FC = () => {
    return (
        <div className={styles.sideBarChat}>
            <img src={Avatar} alt="img"/>
            <div className={styles.sideBarChatInfo}>
                <h3>Room Name</h3>
                <p>last message</p>
            </div>
        </div>
    );
};

export default SideBarChat;