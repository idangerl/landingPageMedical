import { AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur flex flex-col justify-center items-center px-10 py-28">
        <h3 className="text-xl font-['Kalam'] mb-16 w-2/3 text-center">
          El otorrinolaringólogo en Monterrey Jorge Treviño es ahora uno de los
          médicos más importantes en su campo gracias a su contribución a la
          investigación y la prevención.
        </h3>
        <h2 className="text-2xl mb-16 text-center font-bold">
          Direccion del Consultorio
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          <div>
            <h3 className="mb-4">
              Visitanos para que seas atendido con la atención que te mereces en
              Centro de Especialidades Médicas 1er piso consultorio 126
            </h3>
            <p className="border bg-sky-400 bg-opacity-50 backdrop-filter backdrop-blur p-4 mb-5">
              Jose Benitez No 2704 Colonia obispado Monterrey NL CP 64060
            </p>
            Agenda una consulta por WhatsApp al número:
            <p className="flex items-center border bg-sky-400 bg-opacity-50 backdrop-filter backdrop-blur p-4 mb-5">
              <AiFillPhone className="mr-4" />
              8115448285
            </p>
            o mediante una llamada al:
            <p className="flex items-center border bg-sky-400 bg-opacity-50 backdrop-filter backdrop-blur p-4 mb-5">
              <AiFillPhone className="mr-4" /> 8183475220.
            </p>
            <p>
              También puedes contactarnos a través de nuestro correo:
              jorgetrega@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-4">
              Horario de atención: Lunes a Sábado, de 9:00 a 19:00 hrs.
            </p>
            <BsWhatsapp className="text-9xl my-10 cursor-pointer transform hover:scale-110" />
            <p className="w-1/2 text-center font-semibold">
              Da clic en el botón de WhatsApp para contactarnos y saber más
              sobre el otorrinolaringólogo en Monterrey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
