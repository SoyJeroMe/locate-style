import Navbar from '../../components/principals/Navbar'
import joinUs from '../../img/join-us/Equipo_T.png'

function JoinUs() {
  return (
    <>
      <Navbar />
      <div className='relative h-screen overflow-hidden'>
        <div className='absolute inset-0 w-full h-full'>
          <div className='w-full h-full relative'>
            <img className='w-full h-full object-cover clip-diagonal-image' src={joinUs} alt="Join Us" />
            <h1 className='absolute top-0 z-50 text-white font-bold text-4xl flex justify-center items-center m-auto'>Únete A Nustro Equipo De Trabajo</h1>
            <div className='absolute inset-0 bg-white clip-diagonal-overlay'></div>
          </div>
          <div className='absolute inset-0 flex items-center top-72 md:w-1/2 left-[790px] z-10'>
            <div className='w-full  p-4'>
              <div className='text-center'>
                <p className='text-2xl mb-4'>
                  Si tienes ideas innovadoras o habilidades que puedan mejorar
                  nuestra app, nos encantaría saber de ti! Envía una solicitud y
                  comparte tu talento con nosotros para llevar nuestra
                  plataforma al siguiente nivel.
                </p>
                <button className='bg-purple-800 text-white px-4 py-2 rounded m-auto'>
                  Enviar Solicitud
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .clip-diagonal-image {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        .clip-diagonal-overlay {
          clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </>
  )
}

export default JoinUs
