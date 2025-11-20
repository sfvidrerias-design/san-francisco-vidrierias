export default function Director() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-10">PANEL DIRECTOR - CONTROL TOTAL</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-10 rounded-2xl text-center">
          <h2 className="text-3xl">Ventas Totales</h2>
          <p className="text-6xl font-bold mt-4">$1,284,500</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-10 rounded-2xl text-center">
          <h2 className="text-3xl">Vendedores Activos</h2>
          <p className="text-6xl font-bold mt-4">12</p>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-10 rounded-2xl text-center">
          <h2 className="text-3xl">Leads Bots</h2>
          <p className="text-6xl font-bold mt-4">347</p>
        </div>
      </div>
    </div>
  )
}
