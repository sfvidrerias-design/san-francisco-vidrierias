import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else router.push('/vendedor') // después lo cambiaremos según rol
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-emerald-700 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-emerald-900 text-center mb-8">Acceso Interno</h1>
        <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4" />
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6" />
        <button onClick={handleLogin} disabled={loading}
          className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-4 rounded-lg">
          {loading ? 'Entrando...' : 'Ingresar'}
        </button>
      </div>
    </div>
  )
}
