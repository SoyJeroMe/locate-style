import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/principals/Navbar';
import currentUser from '../../img/register/Usuario.jpg';
import stylist from '../../img/options/stylist.png';
import maquillaje from '../../img/register/Maquillaje.jpg';
import logo from '../../img/logos/LogoPrincipal.png';
import bgImage from '../../img/register/M1.jpg';

const Card = ({ href, imgSrc, imgAlt, title, description }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <a className="absolute inset-0 z-10" href={href} rel="ugc">
      <span className="sr-only">{`Seleccionar ${title}`}</span>
    </a>
    <img
      src={imgSrc}
      alt={imgAlt}
      width="800px"
      height="400"
      className="object-cover w-full h-64"
      style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
    />
    <div className="p-4 bg-white">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const App = () => (
  <>
  
    <Navbar className="relative z-20" />
  <section className="relative min-h-screen">
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
    <div className="relative z-10 flex flex-col items-center">
      <img className="w-52 mt-20" src={logo} alt="Logo" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-2xl mx-auto px-4 justify-center items-center mt-8">
        <Link to={'/register-stylist'}>
          <Card 
            href="#" 
            imgSrc={maquillaje} 
            imgAlt="Estilista/Barbero" 
            title="Estilista/Barbero" 
            description="Accede a servicios de peluquería y barbería."
          />
        </Link>
        <Link to={'/register-currrent-user'}>
          <Card 
            href="#" 
            imgSrc={currentUser} 
            imgAlt="Usuario Casual" 
            title="Usuario Casual" 
            description="Reserva citas y compra productos de belleza."
          />
        </Link>
      </div>
    </div>
  </section>
  </>
);

export default App;
