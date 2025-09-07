import React from 'react';
import { Settings, Bell, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 flex items-center justify-between shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded p-1">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">CRM</h1>
            <span className="text-sm opacity-90">Pedidos</span>
          </div>
        </div>
      </div>

      {/* Status Buttons */}
      <div className="flex items-center space-x-2">
        <Button 
          variant="secondary" 
          size="sm" 
          className="bg-green-500 hover:bg-green-600 text-white border-none"
        >
          🔒 CERTIFICADO A1 por 38 h 09 min
        </Button>
        <Button 
          variant="secondary" 
          size="sm" 
          className="bg-green-600 hover:bg-green-700 text-white border-none"
        >
          💚 TESTE GRÁTIS 0 ERP
        </Button>
        <Button 
          variant="secondary" 
          size="sm" 
          className="bg-green-700 hover:bg-green-800 text-white border-none"
        >
          💚 TESTE GRÁTIS 0 E-COMMERCE
        </Button>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <User className="w-5 h-5" />
          <div>
            <span className="text-sm">LOGIN: william.santos@hotmail.com</span>
            <br />
            <span className="text-xs opacity-90">CONTA: 0146 Williams José do Espírito Santo</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
