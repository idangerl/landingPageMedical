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
            <li className="border p-4 text-center bg-[url('consulta.jpg')] bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer">
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Consulta
              </div>
            </li>
            <li className="border p-4 text-center bg-[url('radiofrecuencia.jpg')] bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer">
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Radiofrecuencia de Cornetes
              </div>
            </li>
            <li className="border p-4 text-center bg-[url('endoscopia.jpg')] bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer">
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Cirugía endoscópica para sinusitis
              </div>
            </li>
            <li className="border p-4 text-center bg-[url('tabique.jpg')] bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer">
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Cirugía de Tabique nasal
              </div>
            </li>
            <li className="border p-4 text-center bg-[url('endoscopia-nasal.jpeg')] bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer">
              <div className="inline px-3 text-gray-700 text-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur">
                Endoscopia Nasal
              </div>
            </li>
            <li className="border p-4 text-center bg-[url('pediatrica.jpg')] bg-cover bg-center h-64 rounded-xl transform hover:scale-105 cursor-pointer">
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
