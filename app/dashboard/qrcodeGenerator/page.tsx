"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';

export default function Home() {
  const [qrValue, setQrValue] = useState<string>('');
  const [info, setInfo] = useState<string>('');
  const [qrSrc, setQrSrc] = useState<string>('');

  const handleButtonClick = () => {
    if (!qrValue) {
      setInfo('Indiquer un URL');
    } else {
      setInfo('');
      setQrSrc(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQrValue(event.target.value);
    if (!event.target.value) {
      setInfo('');
    }
  };

  return (
    <div className="container mx-auto  border border-gray-200 rounded-md p-3 ">
      <h2 className="text-3xl uppercase font-black">QR Code</h2>
      <p className="text-lg text-muted-foreground">Générateur QR Code</p>
      <div className='mt-4'>
        <Label className='mb-2'>Indiquer un URL pour générer un QR code</Label>
        <Input
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          placeholder="Indiquer un URL"
          value={qrValue}
          onChange={handleInputChange}
        />
        {info && <p className="info text-red-500 bg-red-200 rounded-md my-2 p-3">{info}</p>}
        <button
        type='button'
        onClick={handleButtonClick}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
         Générer un QR code
      </button>
      </div>
      {qrSrc && (
        <div className="resultat-qr mt-4">
          <img src={qrSrc} alt="QR Code" />
        </div>
      )}
    </div>
  );
}
