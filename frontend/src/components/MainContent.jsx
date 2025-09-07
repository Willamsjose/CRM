import React, { useState } from 'react';
import { Search, Plus, RefreshCw, X, Eye, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';
import { Checkbox } from './ui/checkbox';
import { mockVendors } from '../data/mockData';

const MainContent = ({ activeMenuItem, sidebarCollapsed }) => {
  const [activeTab, setActiveTab] = useState('aplicativo');
  const [searchTerm, setSearchTerm] = useState('');
  const [vendors, setVendors] = useState(mockVendors);

  const filteredVendors = vendors.filter(vendor => 
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveVendor = (id) => {
    setVendors(vendors.filter(vendor => vendor.id !== id));
  };

  const getContentTitle = () => {
    switch(activeMenuItem) {
      case 'fornecedores': return 'Fornecedores';
      case 'pedidos': return 'Pedidos';
      case 'clientes': return 'Clientes';
      case 'produtos': return 'Produtos';
      default: return 'Dashboard';
    }
  };

  return (
    <main className={cn(
      "flex-1 flex flex-col bg-gray-50 transition-all duration-300",
      sidebarCollapsed ? "ml-0" : "ml-0"
    )}>
      {/* Content Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            {getContentTitle()}
          </h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Atualizar
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 overflow-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="aplicativo" className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>APLICATIVO</span>
            </TabsTrigger>
            <TabsTrigger value="erp" className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>ERP</span>
            </TabsTrigger>
            <TabsTrigger value="ecommerce" className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>E-COMMERCE</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="aplicativo" className="space-y-4">
            {/* Action Buttons */}
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg border">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar novo(a) vendedor(a)
              </Button>
              <Button variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Atualizar
              </Button>
            </div>

            {/* Vendor Management */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">VENDEDOR</CardTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">LICENÇA ATUAL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Renovar...
                    </Button>
                    <Button variant="ghost" size="sm">
                      <X className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-gray-600">Preço</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Search */}
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Buscar fornecedores..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="max-w-sm"
                    />
                    <Button variant="outline" size="sm">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Vendor Table */}
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader className="bg-gray-50">
                        <TableRow>
                          <TableHead className="w-12">
                            <Checkbox />
                          </TableHead>
                          <TableHead>Nome</TableHead>
                          <TableHead>Região</TableHead>
                          <TableHead>Válida ...</TableHead>
                          <TableHead>Dias para expi...</TableHead>
                          <TableHead>Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredVendors.map((vendor) => (
                          <TableRow key={vendor.id} className="hover:bg-gray-50">
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            <TableCell className="font-medium">
                              {vendor.name}
                            </TableCell>
                            <TableCell>{vendor.region}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {vendor.validity}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant={vendor.daysToExpire < 30 ? "destructive" : "secondary"}
                                className="text-xs"
                              >
                                {vendor.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="text-xs"
                                >
                                  Renovar
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleRemoveVendor(vendor.id)}
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="erp">
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-gray-500">
                  <h3 className="text-lg font-medium mb-2">Módulo ERP</h3>
                  <p>Funcionalidades do ERP serão exibidas aqui</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ecommerce">
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-gray-500">
                  <h3 className="text-lg font-medium mb-2">Módulo E-commerce</h3>
                  <p>Funcionalidades do E-commerce serão exibidas aqui</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Purchase Summary Footer */}
      <div className="bg-white border-t border-gray-200 p-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Resumo da compra</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">ERP</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">APLICATIVO</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">E-COMMERCE</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-2xl font-bold">Total</span>
                <div className="text-3xl font-bold text-green-600">R$ 0,00</div>
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8">
                Ir para pagamento
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

// Missing import
import { cn } from '../lib/utils';

export default MainContent;