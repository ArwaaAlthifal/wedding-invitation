import React, { useEffect, useState } from 'react'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzgYReesiJvtxZSYq_ElJbfWt8wJbxh7oLUXRPjRWvVyqufQl-UyJmd2s2UnwcM1nkS/exec'

const KomentarForm = () => {
  const [nama, setNama] = useState('')
  const [ucapan, setUcapan] = useState('')
  const [komentarList, setKomentarList] = useState([])
  const [loading, setLoading] = useState(false)

  // Ambil komentar dari Google Sheet saat load
  useEffect(() => {
    fetch(SCRIPT_URL)
      .then(res => res.json())
      .then(data => setKomentarList(data.reverse()))
      .catch(err => console.error('Gagal load komentar:', err))
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    if (!nama || !ucapan) return

    setLoading(true)
    const data = { nama, ucapan }

    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })

      if (res.ok) {
        setKomentarList([{ ...data, timestamp: new Date().toISOString() }, ...komentarList])
        setNama('')
        setUcapan('')
      }
    } catch (error) {
      console.error('Gagal kirim komentar:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Tinggalkan Ucapan</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-2 border rounded"
          value={nama}
          onChange={e => setNama(e.target.value)}
        />
        <textarea
          placeholder="Ucapan"
          className="w-full p-2 border rounded"
          value={ucapan}
          onChange={e => setUcapan(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Mengirim...' : 'Kirim Ucapan'}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Ucapan Tamu</h3>
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {komentarList.length === 0 && <p>Belum ada komentar.</p>}
          {komentarList.map((komen, index) => (
            <div key={index} className="p-3 border rounded bg-gray-50">
              <p className="font-semibold">{komen.nama}</p>
              <p>{komen.ucapan}</p>
              <p className="text-xs text-gray-500">{new Date(komen.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KomentarForm
