import React from 'react'
import aboutUsHeaderImg from '../../img/aboutUs/B1.jpg'
import persons from '../../img/aboutUs/persons.jpeg'
import Navbar from '../../components/principals/Navbar'
import Footer from '../../components/principals/Footer'
import {PiUsersFourBold} from 'react-icons/pi'
import {MdPhonelinkSetup} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'
import {TiShoppingCart} from 'react-icons/ti'
import {Link} from 'react-router-dom'

function AboutUs() {
  return (
    <>
      <Navbar />
      <article
        className="w-full h-[700px] bg-center bg-no-repeat flex flex-col justify-end p-8"
        style={{
          backgroundImage: `url(${aboutUsHeaderImg})`,
          backgroundSize: '100% auto',
        }}
      >
        <div>
          <h1 className="font-bold text-9xl text-shadow text-white mb-4">
            Sobre Nuestra App
          </h1>
          <p className="text-white text-shadow text-3xl">
            Conectando trabajadores/as independientes del mundo de la belleza,
            la moda, el estilo y el cuidado personal con clientes en todo lugar,
            en todo momento.
          </p>
        </div>
      </article>

      <section className="mt-10">
        <article className="">
          <h3 className="bg-gradient-to-r from-purple-800 via-black to-purple-800 text-white w-80 text-center m-auto p-2 text-xl rounded-2xl font-bold mt-8">
            Lo Que Queremos Lograr
          </h3>

          <p className="text-center mt-4 mb-24 pl-36 pr-36 text-xl">
            Nuestra plataforma nace con el propósito de potenciar a personas
            independientes con habilidades en el mundo del bienestar, moda,
            estilo, belleza y cuidado personal, proporcionando un medio para
            conectar su trabajo y talento con clientes que valoran su tiempo, su
            espacio y la calidad. Entendemos las dificultades que enfrentan
            barberos, maquilladoras, estilistas, masajistas, tatuadores,
            diseñadores de moda, asesores de imagen, personas que se dedican a
            la manicura y pedicura, nutricionistas, entrenadores personales y
            peluqueros para obtener un espacio en el cual puedan comenzar a
            prestar sus servicios, así como lo difícil que es darse a conocer
            para poder encontrar más clientes, y a su vez, las pocas opciones
            que las personas tienen para localizar su mejor estilo y bienestar.
            Por estas razones, creamos una plataforma que simplifica este
            proceso para ambos lados.
          </p>
        </article>
        <article className="flex justify-center">
          <div className="flex flex-row items-start">
            <div className="flex flex-col mr-24">
              <button className="bg-gradient-to-r w-52 from-purple-800 via-black to-purple-800 text-white p-2 rounded-2xl text-center font-bold flex justify-center items-center ml-24">
                Sobre Nosotros
              </button>
              <p className="w-[460px] mt-2 text-xl">
                Somos un grupo de emprendedores dedicados a desarrollar
                estrategias innovadoras para impulsar y potenciar al mayor
                número de personas posible. Entendemos lo desafiante que puede
                ser empezar en cualquier proyecto o negocio, por lo que nos
                comprometemos a ofrecer herramientas y soluciones que faciliten
                tu camino, ya sea en gran o en pequeña medida.
              </p>
            </div>
            <div className="">
              <img className="w-[420px] h-72" src={persons} alt="" />
            </div>
          </div>
        </article>
        <article className="flex justify-center flex-col mt-14 w-[800px] items-center m-auto mb-24">
          <h3 className="bg-gradient-to-r from-purple-800 via-black to-purple-800 font-bold text-white p-3 rounded-2xl text-center m-auto mt-8 mb-6">
            Funciones De Nuestra Plataforma
          </h3>
          <div className="grid grid-cols-2 mt-3 w-full gap-x-16 gap-y-10 justify-center items-start text-center m-auto mb-9">
            <Link to={'/register-stylist'}>
              <article className="flex flex-col items-center">
                <PiUsersFourBold className="text-4xl flex justify-center items-center m-auto mb-4 size-24" />
                <h4 className="font-bold mb-2 border-black border-b-4">
                  Regístrate como servicio
                </h4>
                <p className="max-w-xs">
                  Regístrate como servicio para encontrar clientes en cualquier
                  lugar, en cualquier momento.
                </p>
              </article>
            </Link>
            <Link to={'/register-currrent-user'}>
              <article className="flex flex-col items-center">
                <MdPhonelinkSetup className="text-4xl flex justify-center items-center m-auto mb-4 size-24 " />
                <h4 className="font-bold mb-2 border-black border-b-4">
                  Regístrate como cliente
                </h4>
                <p className="max-w-xs">
                  Regístrate como cliente y descubre tu mejor opción en
                  servicios de belleza, moda, estilo y cuidado personal
                  adaptados a tus necesidades.
                </p>
              </article>
            </Link>
            <Link to={'/learning'}>
              <article className="flex flex-col items-center">
                <FaLaptopCode className="text-4xl flex justify-center items-center m-auto mb-4 size-24" />
                <h4 className="font-bold mb-2 border-black border-b-4">
                  Publica o compra un curso
                </h4>
                <p className="max-w-xs">
                  Muestras tus habilidades o compra nuevos aprendizajes en
                  nuestro espacio de cursos sobre todas nuestras categorías.
                  Compra o vende productos
                </p>
              </article>
            </Link>
            <Link to={'/shop'}>
              <article className="flex flex-col items-center">
                <TiShoppingCart className="text-4xl flex justify-center items-center m-auto mb-4 size-24" />
                <h4 className="font-bold mb-2 border-black border-b-4">
                  Compra o vende productos
                </h4>
                <p className="max-w-xs">
                  Publica tu producto o compra productos sobre nuestras
                  categorías.
                </p>
                <p className="mt-6 font-bold">Proximamente...</p>
              </article>
            </Link>
          </div>
        </article>
      </section>
      <Footer />
      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000,
            2px -2px 0 #000;
        }
      `}</style>
    </>
  )
}

export default AboutUs
