import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Input from './Input';

const Form = ({setAppointments, appointments, patient, setPatient}) => {

  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    email: '',
    date: '',
    symptom: ''
  });

  useEffect(() => {
    if(Object.keys(patient).length > 0){
      setAppointment(patient);
    }
  }, [patient])

  const createId = () => `${Math.random().toString(36).substring(2)}${Date.now().toString(36)}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if( [ appointment.pet, appointment.owner, appointment.email, appointment.date, appointment.symptom ].includes('') ) {
      swal({
        title: "Por favor verifica los campos.",
        icon: "warning"
      });  
      return;
    } 
    
    if(patient.id){
      appointment.id = patient.id;
      const auxAppointments = appointments.map( a => a.id === appointment.id ? appointment : a);
      setAppointments(auxAppointments);
      setPatient({});
    } else {
      // Agregar
      appointment.id = createId();
      setAppointments([...appointments, appointment]);
    }

    // Reiniciar el form
    setAppointment({
      pet: '',
      owner: '',
      email: '',
      date: '',
      symptom: ''
    });
    swal({
      title: patient.id ? "¡Paciente modificado exitosamente" : "¡Paciente registrado exitosamente!",
      icon: "success"
    });
  }

  return <div className='md:w-1/2 lg:w-2/5'>
    <h2 className='font-black text-3xl text-center text-purple-800'>Seguimiento de pacientes</h2>
    <p className='mt-3 text-lg text-center mb-5'>
        Añade pacientes <span className='text-purple-800 font-bold'>Administralos</span>
    </p>
    <form className='bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10' onSubmit={handleSubmit}>
      <Input
        id="petName"
        placeholder="Nombre de la mascota"
        name="Nombre mascota"
        value={appointment.pet}
        onChange={(e) => setAppointment({...appointment, pet: e.target.value})}
      />
      <Input
        id="ownerName"
        placeholder="Nombre del propietario"
        name="Nombre propietario"
        value={appointment.owner}
        onChange={(e) => setAppointment({...appointment, owner: e.target.value})}
      />
      <Input
        id="email"
        placeholder="Email de contacto del propietario"
        name="Email"
        value={appointment.email}
        type="email"
        onChange={(e) => setAppointment({...appointment, email: e.target.value})}
      />
      <Input
        id="date"
        placeholder="Fecha de alta"
        name="Alta"
        value={appointment.date}
        type="date"
        onChange={(e) => setAppointment({...appointment, date: e.target.value})}
      />
      <Input
        id="symptom"
        placeholder="Síntomas de la mascota"
        name="Síntomas"
        value={appointment.symptom}
        onChange={(e) => setAppointment({...appointment, symptom: e.target.value})}
      />
      
      <input
          type="submit"
          className="bg-purple-600 w-full p-3 text-white uppercase font-bold hover:bg-purple-800 cursor-pointer transition-colors rounded-sm"
          value= { patient.id ? "Modificar paciente" : "Agregar paciente" }
      />
    </form>
  </div>;
};

export default Form;
