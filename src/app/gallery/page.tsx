import Image from "next/image";
import React from "react";

const imageData = [
  {
    imageUrl: "/IMG_20241112_014633.jpg",
  },
  {
    imageUrl: "/IMG_20241112_014645.jpg",
  },
  {
    imageUrl: "/IMG_20241112_014747.jpg",
  },
  {
    imageUrl: "/IMG-20241005-WA0017.jpg",
  },
  {
    imageUrl: "/IMG-20241109-WA0010.jpg",
  },
  {
    imageUrl: "/IMG-20241109-WA0013.jpg",
  },
  {
    imageUrl: "/IMG-20241225-WA0063.jpg",
  },
  {
    imageUrl: "/IMG-20250103-WA0038.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="p-1">
      <h4 className="text-center text-3xl py-5 text-slate-600">
        Maa Vaishno Interior • Gallery
      </h4>
      <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid max-w-6xl gap-1 mx-auto">
        {imageData.map((image) => (
          <Image
            src={image.imageUrl}
            key={image.imageUrl}
            alt={image.imageUrl}
            width={100}
            height={100}
            className="w-full aspect-square object-cover rounded-sm overflow-hidden"
            unoptimized
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
