import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import react,{useRef} from 'react'

export default function Home() {
  const refForm  = useRef(null)
  const refEmail  = useRef(null)
  const refPass  = useRef(null)
  //const guardar = (e)=>{}
  const guardar = (e)=>{
    e.preventDefault();
      fetch('', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              email: refEmail.current.value,
              password: refPass.current.value,
            })
      })
      .then(res => res.json())
      .then(res=> {
          window.localStorage.setItem("token", res.token)
      })
      .catch(res => console.log())
  }
  
  const registrarse = (e)=>{}
  return (
  <div className="container mx-auto flex flex-col items-center">
    <form ref={refForm} className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
      <a className="text-blue-400 text-center my-2">Ingresar</a>
      <input ref={refEmail} type="text" placeholder="Email" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" required/>
      <input ref={refPass} type="password" placeholder="Pasword" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" minLength={8} maxLength={8} required/>
      <button onClick={guardar} className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
      <a>""</a>
      <hr />
      <a className="text-blue-400 text-center my-2">O crea una nueva cuenta</a>
      <button onClick={registrarse} className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Crear nueva cuenta</button>
    </form>
  </div>
  )
}