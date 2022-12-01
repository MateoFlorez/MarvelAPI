import { useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import "../components.css"

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
    <div className="flex justify-center items-center bg-slate-800 w-full h-5/6 overflow-hidden">
      <button onClick={prevImg} className="text-2xl text-white h-10">
        <VscChevronLeft />
      </button>
      {imagenes.map((imagen, index) => {
        return (
          <div key={index} className="flex overflow-hidden object-cover justify-center">
            {carrusel === index && (
              <img
                key={index}
                src={imagen}
                alt="imagen"
                className="slider_image object-cover opacity-75"
              />
            )}
          </div>
        );
      })}
      <button onClick={nextImg} className="text-2xl text-white h-10">
        <VscChevronRight />
      </button>
    </div>
  );
}
