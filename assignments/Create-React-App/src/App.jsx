import { useRef,useState } from 'react'
import { ChangeBackground, FocusInput, UncontrolledInput } from '../Q6_useRef'
import { CustomFormSubmission, DynamicForm, RealTimeValidationForm } from '../Q7_adv_form_submitting'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  

  return (
    <>
    <FocusInput/>
    <UncontrolledInput/>
    <ChangeBackground/>
    <DynamicForm/>
    <RealTimeValidationForm/>
    <CustomFormSubmission/>
    </>
  )
}

export default App
