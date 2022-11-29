import { useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

export function Slider({ imagenes }) {
  // Variables y estados
  const [carrusel, setCarrusel] = useState(0);
  const cantidad = imagenes?.length;

  // Return prematuro para evitar errores
  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const nextImg = () => {
    setCarrusel(carrusel === cantidad - 1 ? 0 : carrusel + 1);
  };

  const prevImg = () => {
    setCarrusel(carrusel === 0 ? cantidad - 1 : carrusel - 1);
  };

  return (
    <div className="flex items-center justify-center bg-slate-800 w-screen">
      <button onClick={prevImg} className="text-2xl text-white">
        <VscChevronLeft/>
      </button>
      {imagenes.map((imagen, index) => {
        return (
          <div key={index}>
            {carrusel === index && (
              <img key={index} src={imagen} alt="imagen" className="-z-10 h-96 mx-10"/>
            )}
          </div>
        );
      })}
      <button onClick={nextImg} className="text-2xl text-white"><VscChevronRight/></button>
    </div>
  );
}
