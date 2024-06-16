"use client"


import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const caracteres = {
  majuscules: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  minuscules: "abcdefghijklmnopqrstuvwxyz",
  nombres:"0123456789",
  symboles: "@/*+-=%§,;?!<>#&:~'){}|_"
};

const PasswordGeneratorForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(7);
  const [options, setOptions] = useState({
    minuscules: true,
    majuscules: false,
    nombres: false,
    symboles: false,
    repetitions: false,
  });

  const generatePassword = () => {
    let passwordBase = "";
    let passRandom = "";
    const exclureRepetition = options.repetitions;

    Object.keys(options).forEach(key => {
      if (options[key as keyof typeof options] && key !== 'repetitions') {
        passwordBase += caracteres[key as keyof typeof caracteres];
      } else if (key === 'espaces') {
        passwordBase += `${passwordBase}`;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomLettres = passwordBase[Math.floor(Math.random() * passwordBase.length)];
      if (exclureRepetition) {
        !passRandom.includes(randomLettres) || randomLettres === " " ? passRandom += randomLettres : i--;
      } else {
        passRandom += randomLettres;
      }
    }

    setPassword(passRandom);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    toast.success("Mot de passe copié");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({
      ...options,
      [e.target.id]: e.target.checked
    });
  };

  return (
    <div className="container mx-auto text-white border border-gray-200 rounded-md p-3 ">
      <h2 className="text-3xl uppercase font-black">Générateur de mot de passe</h2>
      <p className="text-lg text-muted-foreground">Générer des mots de passes sur mesure</p>
      <div className="mb-4 mt-4">
        <Label className="block text-sm font-medium">Longueur du mot de passe: <span>{length} caractères</span></Label>
   
        <Input
          type="range"
          min="1"
          max="30"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full"
        />
        
      </div>
      <div className="mb-4">
        <Label className="block text-sm font-medium">Options</Label>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(options).map((key) => (
            <div key={key} className="flex items-center">
              <Input
                type="checkbox"
                id={key}
                checked={options[key as keyof typeof options]}
                onChange={handleChange}
                className="mr-2 w-4"
              />
              <label htmlFor={key} className="capitalize">{key}</label>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={generatePassword}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
      >
        Generer un mot de passe
      </button>
      <div className="mt-4">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-2 rounded-md text-white border"
        />
        <button
          onClick={handleCopy}
          className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Copier le mot de passe
        </button>
      </div>
    </div>
  );
};

export default PasswordGeneratorForm;
