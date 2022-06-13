import React from 'react'

import Sidebar from '../../components/siderbar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./home.scss"
import Widgets from '../../components/widget/Widget';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
     <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
     </div>
    </div>
  )
}

export default Home

 