import React from 'react';
import { 
  ShoppingCart, 
  CheckSquare, 
  CreditCard, 
  FileText, 
  Users, 
  Package, 
  Truck, 
  DollarSign, 
  Wallet, 
  BarChart3, 
  Calendar, 
  Building, 
  UserCheck, 
  Target, 
  FileBarChart, 
  Upload, 
  Store, 
  ShoppingBag, 
  CreditCard as License, 
  Settings,
  PieChart,
  Link,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

const Sidebar = ({ activeMenuItem, onMenuItemClick, collapsed, onToggle }) => {
  const menuItems = [
    { id: 'pedidos', label: 'Pedidos', icon: ShoppingCart },
    { id: 'conferencia', label: 'Conferência de pedidos (checkout)', icon: CheckSquare },
    { id: 'pdv', label: 'PDV', icon: CreditCard },
    { id: 'nota-fiscal', label: 'Nota Fiscal', icon: FileText },
    { id: 'clientes', label: 'Clientes', icon: Users },
    { id: 'produtos', label: 'Produtos', icon: Package },
    { id: 'fornecedores', label: 'Fornecedores', icon: Truck },
    { id: 'tabela-precos', label: 'Tabela de preços', icon: DollarSign },
    { id: 'condicoes-pagamento', label: 'Cond. de pagamento', icon: Wallet },
    { id: 'financas', label: 'Finanças', icon: BarChart3, hasSubmenu: true },
    { id: 'agendas', label: 'Agendas (CRM)', icon: Calendar },
    { id: 'transportadoras', label: 'Transportadoras', icon: Truck },
    { id: 'empresas', label: 'Empresas/Representadas', icon: Building },
    { id: 'vendedores', label: 'Vendedores', icon: UserCheck },
    { id: 'equipes-vendas', label: 'Equipes de vendas', icon: Settings },
    { id: 'metas', label: 'Metas', icon: Target },
    { id: 'relatorios', label: 'Relatórios', icon: FileBarChart },
    { id: 'importacoes', label: 'Importações', icon: Upload },
    { id: 'marketplaces', label: 'Marketplaces', icon: Store },
    { id: 'ecommerce', label: 'E-commerce/Catálogo online', icon: ShoppingBag },
    { id: 'comprar-licencas', label: 'Comprar Licenças', icon: License },
    { id: 'usuarios', label: 'Usuários', icon: Users },
    { id: 'sped', label: 'SPED', icon: PieChart, hasSubmenu: true },
    { id: 'integracoes', label: 'Integrações', icon: Link }
  ];

  return (
    <aside className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Menu Principal</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="p-1 hover:bg-gray-100"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
        {collapsed && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="p-1 hover:bg-gray-100 w-full"
          >
            <ChevronDown className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenuItem === item.id;
            
            return (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  onClick={() => onMenuItemClick(item.id)}
                  className={cn(
                    "w-full justify-start text-left p-3 hover:bg-orange-50 hover:text-orange-600 transition-colors",
                    collapsed ? "px-3" : "px-3",
                    isActive && "bg-orange-100 text-orange-700 border-r-2 border-orange-500"
                  )}
                >
                  <Icon className={cn("w-4 h-4", collapsed ? "" : "mr-3")} />
                  {!collapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                  {!collapsed && item.hasSubmenu && (
                    <ChevronRight className="w-3 h-3 ml-auto" />
                  )}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Support Section */}
      <div className="border-t border-gray-200 p-2">
        <div className="bg-yellow-50 rounded-lg p-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            {!collapsed && (
              <span className="text-xs text-gray-600">
                <strong>SUPORTE</strong> ATENÇÃO: Nenhuma licença ativa
              </span>
            )}
          </div>
          {!collapsed && (
            <p className="text-xs text-gray-500 mt-1">
              Plano do ERP vigente: Nenhum
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;