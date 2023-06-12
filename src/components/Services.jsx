import image1 from "../assets/consulta.jpg";
import image2 from "../assets/radiofrecuencia.jpg";
import image3 from "../assets/endoscopia-nasal.jpeg";
import image4 from "../assets/tabique.jpg";
import image5 from "../assets/endoscopia.jpg";
import image6 from "../assets/pediatrica.jpg";


function Services() {
  return (
    <section id="services" className="py-10">
      <div className="bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur flex flex-col justify-center items-center p-10">
        <h3 className="mb-16 w-2/3 text-xl text-center font-['Kalam']">
          Te mereces un alto nivel de atención por parte de un
          Otorrinolaringólogo de vanguardia, por lo que el Dr. Jorge Treviño
          Garza especialista en padecimiento de los oídos.
        </h3>
        <div className="w-full">
          <h2 className="text-2xl mb-16 text-center font-bold">
            Servicios del Otorrinolaringólogo en Monterrey
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 w-full">
            <li className="border p-4 text-center bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer" style={{ backgroundImage: `url(${image1})` }}>
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Consulta
              </div>
            </li>
            <li className="border p-4 text-center bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer" style={{ backgroundImage: `url(${image2})` }}>
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Radiofrecuencia de Cornetes
              </div>
            </li>
            <li className="border p-4 text-center bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer" style={{ backgroundImage: `url(${image3})` }}>
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Cirugía endoscópica para sinusitis
              </div>
            </li>
            <li className="border p-4 text-center bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer" style={{ backgroundImage: `url(${image4})` }}>
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Cirugía de Tabique nasal
              </div>
            </li>
            <li className="border p-4 text-center bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer" style={{ backgroundImage: `url(${image5})` }}>
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Endoscopia Nasal
              </div>
            </li>
            <li className="border p-4 text-center bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer" style={{ backgroundImage: `url(${image6})` }}>
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Otorrinolaringología Pediátrica
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
