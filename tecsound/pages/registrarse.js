import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import react,{useRef} from 'react'

export default function Home() {
  const refForm  = useRef(null)
  const refEmail  = useRef(null)
  const refPass  = useRef(null)
  
  const guardar = (e)=>{
    e.preventDefault();
    console.log(refEmail.current.value);
    console.log(refPass.current.value);
    //192.168.39.106
    
  }
  return (
  <div className="container mx-auto flex flex-col items-center">
    <form ref={refForm} class="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
      <a className="text-blue-400 text-center my-2">Ingresar</a>
      <input disable="true" ref={refEmail} type="text" placeholder="" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" required/>
      <input ref={refPass} type="password" placeholder="Pasword" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" minLength={8} maxLength={8} required/>
      <button onClick={guardar} className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
      <a>""</a>
      <hr />
      <a className="text-blue-400 text-center my-2">O crea una nueva cuenta</a>
      <button className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Crear nueva cuenta</button>
    </form>
  </div>
  )
}