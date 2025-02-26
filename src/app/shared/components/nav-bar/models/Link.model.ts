export interface Link{
  title: string; // titre du lien
  url? : string; // url du lien
  isVisible: boolean; // est-ce que le lien est visible
  children: {
    title: string; // titre du lien
    url? : string; // url du lien
    isVisible: boolean; // est-ce que le lien est visible
  }[]; // sous-menu
}
