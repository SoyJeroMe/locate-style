import Navbar from '../../components/principals/Navbar'
import joinUs from '../../img/join-us/Equipo_T.png'
import { Link } from 'react-router-dom'
import {FiInstagram} from 'react-icons/fi'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {AiFillTikTok} from 'react-icons/ai'
import { FaPinterest } from "react-icons/fa";

function JoinUs() {
  return (
    <>
      <Navbar />
      <div className='relative h-screen overflow-hidden'>
        <div className='absolute inset-0 w-full h-full'>
          <div className='w-full h-full relative'>
            <img className='w-full h-full object-cover clip-diagonal-image' src={joinUs} alt="Join Us" />
            <h1 className='absolute top-1 z-50 text-white font-bold text-4xl flex justify-center items-center m-auto ml-[500px] mt-14 text-shadow'>Únete A Nustro Equipo De Trabajo</h1>
            <div className='absolute inset-0 bg-white clip-diagonal-overlay'></div>
          </div>
          <section className='absolute inset-0 flex items-center top-80 md:w-1/2 left-[830px] z-10'>
            <article className='w-full  p-4'>
              <div className='text-center'>
                <p className='text-2xl mb-4'>
                  Si tienes ideas innovadoras o habilidades que puedan mejorar
                  nuestra app, nos encantaría saber de ti! Envía una solicitud y
                  comparte tu talento con nosotros para llevar nuestra
                  plataforma al siguiente nivel.
                </p>
                <button className='bg-black text-white px-4 py-2 rounded m-auto hover:bg-purple-900'>
                  Enviar Solicitud
                </button>
              </div>
            </article>
            <article className='absolute z-60 bottom-7 right-5'>
            <ul className="grid grid-cols-4 gap-3">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={'https://www.instagram.com/locatestyle/?next=%2F'}
            >
              <li className="flex items-center">
                <FiInstagram className="size-8" />
              </li>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={'https://x.com/LocateStyleApp'}
            >
              <li className="flex items-center">
                <FaSquareXTwitter className="size-8" />
              </li>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={'https://www.tiktok.com/@locatestyle?lang=es'}
            >
              <li className="flex items-center">
                <AiFillTikTok className="size-8" />
              </li>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={'https://co.pinterest.com/LocateStyle/_created/'}
            >
              <li className="flex items-center">
                <FaPinterest className="size-8" />
              </li>
            </Link>
          </ul>
            </article>
          </section>
        </div>
      </div>
      <style jsx>{`
        .clip-diagonal-image {
          clip-path: polygon(0 0, 100% 0, 120% 100%, 0 100%);
        }
        .clip-diagonal-overlay {
          clip-path: polygon(120% 0, 100% 0, 100% 100%, 0 100%);
        }
        
        .text-shadow {
          text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000;
        }
      `}</style>
    </>
  )
}

export default JoinUs
