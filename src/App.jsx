
import React from 'react';
import logo from '/logo.png';
import heroImage from '/foto-garage.jpg';
import image1 from '/bmw-auspuff.jpg';
import image2 from '/bmw-fahrwerk.jpg';
import image3 from '/bmw-draussen.jpg';
import image4 from '/bmw-m3-heck.jpg';
import image5 from '/auspuff-vergleich.jpg';

const images = [image1, image2, image3, image4, image5];

function App() {
  return (
    <div>
      <header className="bg-gray-800 p-4 text-center shadow-md">
        <img src={logo} alt="Logo" className="mx-auto h-24" />
      </header>
      <section className="relative h-[80vh]">
        <img src={heroImage} alt="Garage" className="w-full h-full object-cover brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Zilji Performance</h1>
        </div>
      </section>
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-900">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} className="rounded-lg shadow-md" />
        ))}
      </section>
      <footer className="text-center p-4 bg-gray-800 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Zilji Performance
      </footer>
    </div>
  );
}

export default App;
