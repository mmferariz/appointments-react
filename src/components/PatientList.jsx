import PatientCard from "./PatientCard";

const PatientList = ({appointments, setPatient, deleteAppointment}) => {
  return <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-scroll'>
    {appointments && appointments.length ?
      (<>
        <h2 className='font-black text-3xl text-center text-purple-800'>Listado de pacientes</h2>
        <p className='m-3 text-lg text-center mb-5'>Administra tus <span className='font-bold text-purple-800'>pacientes y citas</span></p>
        {appointments.map(a => <PatientCard
          key = {a.id}
          patient = {a}
          setPatient = {setPatient} 
          deleteAppointment = {deleteAppointment}
        />)}
      </>)
    :
      (<>
        <h2 className='font-black text-3xl text-center text-purple-800'>No hay pacientes registrados</h2>
        <p className='m-3 text-lg text-center mb-5'>Completa el formulario con los datos de tu paciente <span className='font-bold text-purple-800'>y aparecerán automáticamente</span></p>
      </>)
    }
  </div>;
};

export default PatientList;
