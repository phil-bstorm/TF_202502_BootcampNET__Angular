export interface Voiture {
    id: number;
    marque: string;
    modele: string;
    prix: number;
    couleur?: string;
}

export interface VoitureDTO {
    marque: string;
    modele: string;
    prix: number;
    couleur?: string;
}