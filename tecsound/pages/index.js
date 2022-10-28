import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div class="container mx-auto flex flex-col items-center">
    <form class="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
      <a class="text-blue-400 text-center my-2">Ingresar</a>
      <input type="text" placeholder="Email" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <input type="password" placeholder="Pasword" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <button class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
      <a>""</a>
      <hr />
      <a class="text-blue-400 text-center my-2">O crea una nueva cuenta</a>
      <button class="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Create New Account</button>
    </form>
  </div>
  )
}
