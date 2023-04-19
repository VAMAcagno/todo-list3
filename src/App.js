import React from 'react';
import './App.css';
import Header from './js/Header.js';
import LoadingBar from './js/LoadingBar';
import NewTask from './js/NewTask.js';
import OnGoingTasks from './js/OnGoingTasks.js';
import MobileNewTask from './js/MobileNewTask.js';
import Modal from './js/Modal.js';
import { ModalContext } from './js/ModalContext';
import {ResponsiveContext} from './js/Utils/Utils.js';

function App() {
  const {modal} = React.useContext(ModalContext);
  const {isTablet, isMobile, isDesktopOrLaptop} = React.useContext(ResponsiveContext);

  return (

    <div className='main-container'>
          <Header />
          <LoadingBar/>
         {isDesktopOrLaptop && <NewTask/>}
          <OnGoingTasks />
          {(isTablet || isMobile) && <MobileNewTask />}
          {modal && <Modal />}
    </div>
  );
}

export default App;