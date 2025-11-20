import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Vendedor() {
  const [ventas, setVentas] = useState([])
  const [monto, setMonto] = useState('')

  useEffect(() => { cargarVentas() }, [])

  const cargarVentas = async () => {
    const { data } = await supabase.from('ventas').select('*').order('created_at', { ascending: false })
    setVentas(data || [])
  }

  const registrarVenta = async () => {
    await supabase.from('ventas').insert({ monto: parseFloat(monto), created_at: new Date() })
    setMonto('')
    cargarVentas()
  }

  const totalComision = ventas.reduce((a, v) => a + v.monto * 0.0896, 0)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-900 mb-8">Panel Vendedor</h1>
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold">Comisión total: ${totalComision.toFixed(2)} MXN (8.96%)</h2>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Registrar venta nueva</h2>
          <input type="number" placeholder="Monto de la venta" value={monto} onChange={e => setMonto(e.target.value)}
            className="border p-4 rounded-lg w-64 mr-4" />
          <button onClick={registrarVenta} className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold">
            Guardar venta
          </button>
        </div>

        <div className="mt-10 bg-white rounded-xl shadow-xl p-8 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Bitácora de ventas</h2>
          <table className="w-full">
            <thead className="bg-emerald-700 text-white">
              <tr><th className="p-4">Fecha</th><th className="p-4">Monto</th><th className="p-4">Comisión 8.96%</th></tr>
            </thead>
            <tbody>
              {ventas.map(v => (
                <tr key={v.id} className="border-b">
                  <td className="p-4 text-center">{new Date(v.created_at).toLocaleDateString()}</td>
                  <td className="p-4 text-center">${v.monto}</td>
                  <td className="p-4 text-center font-bold">${(v.monto * 0.0896).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
