export interface Link{
  title: string; // titre du lien
  url? : string; // url du lien
  children: Link[]; // sous-menu
  isVisible: boolean; // est-ce que le lien est visible
}
