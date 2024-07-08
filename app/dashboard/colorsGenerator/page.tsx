"use client"

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const ColorGenerator = () => {
  const [colors, setColors] = useState<string[]>([]);

  const colorsMax = 32;

  const generatorPalette = () => {
    const newColors = [];
    for (let i = 0; i < colorsMax; i++) {
      let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
      randomColor = `#${randomColor.padStart(6, '0')}`;
      newColors.push(randomColor);
    }
    setColors(newColors);
  };

  const copyColor = (val: string) => {
    navigator.clipboard.writeText(val)
      .then(() => {
        toast.success(`Couleur ${val} copiée`)
      })
   
  };

  useEffect(() => {
    generatorPalette();
  }, []);

  return (
    <div className="container mx-auto  border border-gray-200 rounded-md p-3">
      <h2 className="text-3xl uppercase font-black">Générateur de couleurs</h2>
      <p className="text-lg text-muted-foreground">Générer une palette de couleurs cohérente</p>
  
      <button
        onClick={generatorPalette}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded my-4"
      >
        Generer une palette
      </button>
      <div className="mb-4 mt-4">
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 generator">
        {colors.map((color) => (
          <li key={color} className="box-choice flex flex-col items-center ">
            <div 
              className="color w-16 h-16 mb-2 rounded-full cursor-pointer" 
              style={{ background: color }}
              onClick={() => copyColor(color)}
            />
            <span className="value">{color}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ColorGenerator;
