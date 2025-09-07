import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('fornecedores');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeMenuItem={activeMenuItem} 
          onMenuItemClick={handleMenuItemClick}
          collapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
        />
        <MainContent 
          activeMenuItem={activeMenuItem}
          sidebarCollapsed={sidebarCollapsed}
        />
      </div>
    </div>
  );
};

export default Dashboard;