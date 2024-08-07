import React, { useState } from 'react';
import Navbar from '../../components/principals/Navbar';
import learningVideo from '../../media/learning/VideoCategorias1.mp4';
import { IoIosArrowDropdown } from 'react-icons/io';
import coursesData from '../../data/courses';
import Filtro from './Filtro';

function Learning() {
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      const yOffset = 20; // Ajuste para mostrar solo el título y las primeras tarjetas
      const y =
        coursesSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleFilter = (category, price, rating, difficulty) => {
    let filtered = coursesData;

    if (category) {
      filtered = filtered.filter(course => course.category === category);
    }

    if (price) {
      if (price === 'low') {
        filtered = filtered.filter(course => course.price <= 100);
      } else if (price === 'medium') {
        filtered = filtered.filter(course => course.price > 100 && course.price <= 200);
      } else if (price === 'high') {
        filtered = filtered.filter(course => course.price > 200);
      }
    }

    if (rating) {
      filtered = filtered.filter(course => course.rating >= parseInt(rating, 10));
    }

    if (difficulty) {
      filtered = filtered.filter(course => course.difficulty === difficulty);
    }

    setFilteredCourses(filtered);
  };

  return (
    <div>
      <Navbar />
      <div>
        <video
          className="w-full max-h-[700px] object-cover"
          autoPlay
          loop
          muted
          src={learningVideo}
        >
          Your browser does not support the video tag.
        </video>
        <p className="text-5xl font-black absolute text-center top-[530px] text-bold z-50 text-white">
          REFUERZA TUS HABILIDADES Y CONOCIMIENTOS CON LOS MEJORES CURSOS
          CREADOS POR NUESTRA PROPIA COMUNIDAD
          <div
            className="flex text-center justify-center"
            onClick={scrollToCourses}
          >
            <IoIosArrowDropdown className="flex m-auto mt-2 mb-2 size-28 cursor-pointer text-center text-white" />
          </div>
        </p>
      </div>
      <section id="courses-section" className="p-9 absolute">
        <button className='rounded-xl text-white bg-black p-3 relative left-[1460px]'>
          Publica tu Curso
        </button>
        <article>
          <h1 className="text-4xl text-center mb-8">
            Cursos creados por la comunidad
          </h1>
        </article>
        <div>
          <Filtro onFilter={handleFilter} />
        </div>
        <div>
          <h3 className='font-bold text-3xl ml-28'>
            Todos
          </h3>
        </div>
        <section className="flex flex-wrap justify-center">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="max-w-xs m-4 bg-white rounded-lg shadow-lg"
            >
              <img
                src={course.imgSrc}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-700">{course.description}</p>
                <p className="text-gray-700 font-bold">${course.price}</p>
                <p className="text-gray-700 font-bold">{course.rating} estrellas</p>
                <p className="text-gray-700 font-bold">{course.difficulty}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}

export default Learning;
