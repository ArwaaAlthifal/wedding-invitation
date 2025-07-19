import { useState } from 'react'

export default function KomentarForm() {
  const [nama, setNama] = useState('')
  const [pesan, setPesan] = useState('')
  const [loading, setLoading] = useState(false)
  const [sukses, setSukses] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbyMTKSCtJnvpVeucIoLRqamkti0FnIYiPkDQQegogkQcbubVNImgoRfp3myi_roJaf4/exec',
        {
          method: 'POST',
          body: JSON.stringify({ nama, pesan }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (res.ok) {
        setSukses(true)
        setNama('')
        setPesan('')
      } else {
        alert('Gagal kirim komentar')
      }
    } catch (err) {
      console.error(err)
      alert('Terjadi kesalahan')
    }

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold text-[#543f33] text-center">Tulis Ucapan & Doa</h2>

      <input
        type="text"
        placeholder="Nama"
        className="w-full p-2 border rounded"
        value={nama}
        onChange={e => setNama(e.target.value)}
        required
      />
      <textarea
        placeholder="Ucapan atau doa"
        className="w-full p-2 border rounded"
        value={pesan}
        onChange={e => setPesan(e.target.value)}
        required
      ></textarea>

      <button
        type="submit"
        className="bg-[#543f33] text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Mengirim...' : 'Kirim'}
      </button>

      {sukses && <p className="text-green-600 text-sm mt-2">Komentar berhasil dikirim!</p>}
    </form>
  )
}
