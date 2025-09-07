import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Utility functions for the PedidoOK platform

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
};

export const formatCNPJ = (cnpj) => {
  return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
};

export const formatPhone = (phone) => {
  return phone.replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
};

export const getStatusColor = (status) => {
  const statusColors = {
    'Ativo': 'text-green-600 bg-green-100',
    'Inativo': 'text-red-600 bg-red-100',
    'Pendente': 'text-yellow-600 bg-yellow-100',
    'Aprovado': 'text-blue-600 bg-blue-100',
    'Em Produção': 'text-purple-600 bg-purple-100',
    'Expirada': 'text-red-600 bg-red-100',
    'Cancelado': 'text-gray-600 bg-gray-100'
  };
  
  return statusColors[status] || 'text-gray-600 bg-gray-100';
};

export const calculatePercentage = (current, target) => {
  return target > 0 ? Math.round((current / target) * 100) : 0;
};

export const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};