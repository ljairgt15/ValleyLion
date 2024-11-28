export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    imageUrl: string;
    sizeOptions?: string[];
    description: string;
    genre: string; // "Hombre", "Mujer", "Niños"
    equipmentType: string; // "Primera Equipación", "Segunda Equipación", "Arqueros", "Presentación", "Calentador"
    relevance?: number; // Para ordenar por relevancia
    sales?: number; // Para ordenar por más vendidos
    dateAdded?: Date; // Para ordenar por fecha
  }
  