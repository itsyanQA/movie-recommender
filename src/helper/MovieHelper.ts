export function getLowResImage(imageUrl: string): string {
  const alteredImageUrl = imageUrl?.replace("@._V1_.jpg", "@._V1_QL100_UX180_CR25,0,150,225_.jpg");
  return alteredImageUrl;
}
