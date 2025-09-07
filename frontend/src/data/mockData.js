// Mock data for PedidoOK platform

export const mockVendors = [
  {
    id: 1,
    name: "Williams José do Espírito Santo",
    region: "Recife, Escada, Goiana Cam...",
    validity: "12/10/18",
    daysToExpire: 0,
    status: "Expirada"
  },
  {
    id: 2,
    name: "Maria Silva Santos",
    region: "São Paulo, Campinas, Santos",
    validity: "15/03/24",
    daysToExpire: 45,
    status: "45 dias"
  },
  {
    id: 3,
    name: "João Carlos Oliveira",
    region: "Rio de Janeiro, Niterói",
    validity: "22/08/24",
    daysToExpire: 120,
    status: "120 dias"
  },
  {
    id: 4,
    name: "Ana Paula Costa",
    region: "Belo Horizonte, Contagem",
    validity: "10/12/23",
    daysToExpire: 5,
    status: "5 dias"
  },
  {
    id: 5,
    name: "Carlos Eduardo Lima",
    region: "Salvador, Feira de Santana",
    validity: "05/09/24",
    daysToExpire: 90,
    status: "90 dias"
  }
];

export const mockPedidos = [
  {
    id: "PED001",
    cliente: "Empresa ABC Ltda",
    vendedor: "Williams José",
    valor: 2500.00,
    status: "Pendente",
    data: "07/09/2025",
    prazo: "14/09/2025"
  },
  {
    id: "PED002",
    cliente: "Comércio XYZ",
    vendedor: "Maria Silva",
    valor: 1850.50,
    status: "Aprovado",
    data: "06/09/2025",
    prazo: "13/09/2025"
  },
  {
    id: "PED003",
    cliente: "Distribuidora 123",
    vendedor: "João Carlos",
    valor: 3200.75,
    status: "Em Produção",
    data: "05/09/2025",
    prazo: "12/09/2025"
  }
];

export const mockClientes = [
  {
    id: 1,
    nome: "Empresa ABC Ltda",
    cnpj: "12.345.678/0001-90",
    email: "contato@empresaabc.com.br",
    telefone: "(11) 3456-7890",
    cidade: "São Paulo",
    estado: "SP",
    status: "Ativo"
  },
  {
    id: 2,
    nome: "Comércio XYZ",
    cnpj: "98.765.432/0001-10",
    email: "vendas@comercioxyz.com.br",
    telefone: "(21) 2345-6789",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    status: "Ativo"
  },
  {
    id: 3,
    nome: "Distribuidora 123",
    cnpj: "11.222.333/0001-44",
    email: "pedidos@dist123.com.br",
    telefone: "(31) 3333-4444",
    cidade: "Belo Horizonte",
    estado: "MG",
    status: "Inativo"
  }
];

export const mockProdutos = [
  {
    id: "PROD001",
    nome: "Produto A",
    categoria: "Categoria 1",
    preco: 125.50,
    estoque: 150,
    fornecedor: "Fornecedor Alpha",
    status: "Ativo"
  },
  {
    id: "PROD002",
    nome: "Produto B",
    categoria: "Categoria 2",
    preco: 89.90,
    estoque: 200,
    fornecedor: "Fornecedor Beta",
    status: "Ativo"
  },
  {
    id: "PROD003",
    nome: "Produto C",
    categoria: "Categoria 1",
    preco: 245.00,
    estoque: 75,
    fornecedor: "Fornecedor Alpha",
    status: "Ativo"
  }
];

export const mockFornecedores = [
  {
    id: 1,
    nome: "Fornecedor Alpha Ltda",
    cnpj: "22.333.444/0001-55",
    email: "comercial@alpha.com.br",
    telefone: "(11) 4567-8901",
    cidade: "São Paulo",
    estado: "SP",
    produtos: 25,
    status: "Ativo"
  },
  {
    id: 2,
    nome: "Fornecedor Beta S.A.",
    cnpj: "33.444.555/0001-66",
    email: "vendas@beta.com.br",
    telefone: "(21) 5678-9012",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    produtos: 18,
    status: "Ativo"
  },
  {
    id: 3,
    nome: "Fornecedor Gamma",
    cnpj: "44.555.666/0001-77",
    email: "contato@gamma.com.br",
    telefone: "(31) 6789-0123",
    cidade: "Belo Horizonte",
    estado: "MG",
    produtos: 12,
    status: "Inativo"
  }
];

export const mockTransportadoras = [
  {
    id: 1,
    nome: "Transportes Rápidos Ltda",
    cnpj: "55.666.777/0001-88",
    telefone: "(11) 7890-1234",
    email: "contato@rapidostransportes.com.br",
    regiao: "Sudeste",
    status: "Ativo"
  },
  {
    id: 2,
    nome: "Logística Express",
    cnpj: "66.777.888/0001-99",
    telefone: "(21) 8901-2345",
    email: "operacao@logexpress.com.br",
    regiao: "Nacional",
    status: "Ativo"
  }
];

export const mockVendedores = [
  {
    id: 1,
    nome: "Williams José do Espírito Santo",
    email: "williams@pedidook.com.br",
    telefone: "(81) 9876-5432",
    regiao: "Nordeste",
    meta: 50000.00,
    vendas: 32500.00,
    status: "Ativo"
  },
  {
    id: 2,
    nome: "Maria Silva Santos",
    email: "maria@pedidook.com.br",
    telefone: "(11) 9765-4321",
    regiao: "Sudeste",
    meta: 75000.00,
    vendas: 68200.00,
    status: "Ativo"
  }
];

// Dashboard summary data
export const mockDashboardData = {
  totalPedidos: 1247,
  pedidosPendentes: 23,
  pedidosAprovados: 156,
  faturamentoMes: 125000.00,
  metaMensal: 200000.00,
  clientesAtivos: 89,
  produtosCadastrados: 456,
  fornecedoresAtivos: 12
};