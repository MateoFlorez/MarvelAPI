import { Slider } from "./Slider";
import { Comic } from "./Comic";

export function Home() {
  const mockImagenes = [
    "https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-x85jmo-645018-Preview.webp",
    "https://wallpaperaccess.com/full/45790.jpg",
    // 'https://wallpaperaccess.com/full/14358.jpg',
  ];

  return (
    <>
      <Slider imagenes={mockImagenes} />
      <Comic />
    </>
  );
}
