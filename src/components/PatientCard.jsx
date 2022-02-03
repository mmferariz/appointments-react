import swal from "sweetalert";

const PatientCard = ({patient, setPatient, deleteAppointment}) => {

    const deleteHandler = async ()  => {
        const res = await swal({
            title: "¿Desea eliminar el paciente seleccionado?",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancelar", "Eliminar"],
        })
        if(res){
            deleteAppointment(patient.id)
        } 
    };

    return <div className='bg-gray-100 shadow-md py-10 px-5 rounded-lg mb-2  m-3'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Mascota: <span className='font-normal normal-case'>{patient.pet}</span>
        </p>  
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario: <span className='font-normal normal-case'>{patient.owner}</span>
        </p>  
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: <span className='font-normal normal-case'>{patient.email}</span>
        </p>  
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha de alta: <span className='font-normal normal-case'>{patient.date}</span>
        </p>  
        <p className='font-bold text-gray-700 uppercase'>
            Síntomas: <span className='font-normal normal-case'>{patient.symptom}</span>
        </p>  
        <div className="flex justify-between">
            <button className="py-2 px-5 hover:bg-blue-300 bg-blue-400 text-white mt-10 rounded" type="button" onClick={() => setPatient(patient)}>Editar</button>
            <button className="py-2 px-5 hover:bg-red-400 bg-red-600 text-white mt-10 rounded" type="button" onClick={deleteHandler}>Eliminar</button>
        </div>
    </div>;
};

export default PatientCard;
