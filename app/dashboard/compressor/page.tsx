"use client";

import { useState } from "react";
import { UploadCloud, DownloadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ImageUploader: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [imgRatio, setImgRatio] = useState<number>(1);
  const [keepRatio, setKeepRatio] = useState<boolean>(true);
  const [reduceQuality, setReduceQuality] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      setImageSrc(img.src);
      setWidth(img.naturalWidth);
      setHeight(img.naturalHeight);
      setImgRatio(img.naturalWidth / img.naturalHeight);
    };
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseInt(e.target.value, 10);
    setWidth(newWidth);
    if (keepRatio) {
      setHeight(Math.floor(newWidth / imgRatio));
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseInt(e.target.value, 10);
    setHeight(newHeight);
    if (keepRatio) {
      setWidth(Math.floor(newHeight * imgRatio));
    }
  };

  const handleDownload = () => {
    if (!imageSrc) return;

    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      a.href = canvas.toDataURL("image/jpeg", reduceQuality ? 0.7 : 1.0);
      a.download = `${Date.now()}.jpg`;
      a.click();
    };
  };

  return (
    <div className="border border-gray-200 rounded-md p-3">
        <h2 className="text-3xl uppercase font-black">Compresseur</h2>
      <p className="text-lg text-muted-foreground">Compresser vos images pour une meilleure performance</p>
      {imageSrc === null && (
        <div
        className="mt-4 border border-dashed border-gray-600 p-6 rounded-lg text-center cursor-pointer"
        onClick={() => document.querySelector<HTMLInputElement>(".file-inp")?.click()}
      >
        <UploadCloud className="mx-auto h-12 w-12" />
        <p className="mt-4">Sélectionner votre fichier</p>
        
        <Input
          type="file"
          accept="image/*"
          className="file-inp hidden"
          onChange={handleFileChange}
        />
      </div>
      )}
      {imageSrc && <img src={imageSrc} alt="Preview" className="w-64 h-64 mt-4 mx-auto max-w-full rounded-md" />}

      {imageSrc && (
        <div className="content mt-6">
          <div className="row sizes mb-4 flex space-x-4">
            <div className="box width flex-1">
              <Label className="block mb-2">Width</Label>
              <Input
                type="number"
                value={width}
                onChange={handleWidthChange}
                className="w-full p-2 rounded text-white border"
              />
            </div>
            <div className="box height flex-1">
              <Label className="block mb-2">Height</Label>
              <Input
                type="number"
                value={height}
                onChange={handleHeightChange}
                className="w-full p-2 rounded text-white border"
              />
            </div>
          </div>
          <div className="row check mb-4 flex space-x-4">
            <div className="box ratio flex-1">
              <Input
                type="checkbox"
                id="ratio"
                checked={keepRatio}
                onChange={(e) => setKeepRatio(e.target.checked)}
                className="mr-2 w-4"
              />
              <Label htmlFor="ratio">Garder le ratio</Label>
            </div>
            <div className="box qualite flex-1">
              <Input
                type="checkbox"
                id="qualite"
                checked={reduceQuality}
                onChange={(e) => setReduceQuality(e.target.checked)}
                className="mr-2 w-4"
              />
              <Label htmlFor="qualite">Diminuer la qualité</Label>
            </div>
          </div>
          <button
            onClick={handleDownload}
            className="download-btn bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2"
          >
            <p>Télécharger votre image</p>
            <DownloadCloud className="ml-2 h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
