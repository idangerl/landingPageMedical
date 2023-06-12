function Hero() {
  return (
    <section className="bg-cover bg-center bg-[url('otorrinolaringologo.jpg')] h-[47rem] flex items-center mt-5 mb-10">
      <div className="w-1/4 m-24 p-10 rounded-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur font-normal">
        <p className="leading-10 text-lg">
          El <span className="font-bold">Dr. Jorge Treviño Garza</span> es un{" "}
          <span className="font-semibold">
            Otorrinolaringólogo en Monterrey
          </span>{" "}
          que cuenta con especialidad en Cirugía Plástica Facial, es un médico
          que constantemente se actualiza con el fin de mejorar sus servicios a
          los pacientes.
        </p>
      </div>
    </section>
  );
}

export default Hero;
