import { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {
  const [appointments, setAppointments] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    const auxAppointments = JSON.parse(localStorage.getItem("appointments")) ?? [];
    setAppointments(auxAppointments);
  }, [])
  useEffect(() => localStorage.setItem("appointments", JSON.stringify(appointments)), [appointments])

  const deleteAppointment = (id) => {
    const auxAppointments = appointments.filter( a => a.id !== id);
    setAppointments(auxAppointments);
  }

  return (
    <>
      <div className='container mt-10 mx-auto'>
        <Header></Header>
        <div className='mt-12 md:flex'>
          <Form 
            setAppointments = {setAppointments}
            appointments = {appointments}
            patient = {patient}
            setPatient = {setPatient}
          />
          <PatientList
            appointments = {appointments}
            setPatient = {setPatient}
            deleteAppointment = {deleteAppointment}
          />
        </div>
      </div>
    </>
  )
}

export default App
