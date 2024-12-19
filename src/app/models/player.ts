export interface Player {
    id: number;
    name: string;
    number: number;
    position: string;
    image: string;
  }
  
  export interface TeamCategory {
    id: number;
    name: string; // e.g., "U16"
    players: Player[];
  }
  