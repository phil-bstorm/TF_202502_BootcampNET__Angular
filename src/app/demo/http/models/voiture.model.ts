export interface Voiture {
    id: string;
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