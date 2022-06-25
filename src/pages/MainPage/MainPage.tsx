import React, {FC} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './MainPage.module.scss'

const MainPage:FC = () => {
    return (
        <div className={styles.mainPage}>
            <Sidebar/>
        </div>
    );
};

export default MainPage;