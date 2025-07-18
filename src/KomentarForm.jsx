// File: KomentarForm.jsx
import { useState, useEffect } from 'react'

export default function KomentarForm() {
  const [nama, setNama] = useState('')
  const [komentar, setKomentar] = useState('')
  const [kehadiran, setKehadiran] = useState('')
  const [komentarList, setKomentarList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Ganti dengan URL deploy Google Apps Script Anda
  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbxX8LnTCoE_pZp9C1caAd9bU06R4SSBF2xJRxQjsVov3X6D7NcmGydHHLBFxPEk9qhX/exec'

  useEffect(() => {
    loadKomentar()
  }, [])

  const loadKomentar = async () => {
    try {
      setLoading(true)
      const response = await fetch(scriptUrl)
      const data = await response.json()
      if (data.success) {
        setKomentarList(data.data.reverse()) // Tampilkan yang terbaru pertama
      }
    } catch (err) {
      setError('Gagal memuat komentar')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!nama.trim() || !komentar.trim()) {
      setError('Nama dan komentar harus diisi')
      return
    }

    try {
      setLoading(true)
      setError('')
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, komentar, kehadiran }),
      })

      const data = await response.json()
      if (data.success) {
        setSuccess('Komentar berhasil dikirim!')
        setNama('')
        setKomentar('')
        setKehadiran('')
        loadKomentar()
        setTimeout(() => setSuccess(''), 3000)
      }
    } catch (err) {
      setError('Gagal mengirim komentar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-[#f1e9d9] py-16 px-4 text-center text-[#543f33]">
      <div className="max-w-3xl mx-auto">
        {/* Judul */}
        <div className="mb-6 leading-none">
          <h1 className="text-header-1 text-xl font-bold leading-none">Pesan &</h1>
          <h1
            className="text-header-1 text-4xl font-black leading-none"
            style={{ textShadow: '1px 1px 1px rgba(84,63,51,1)' }}
          >
            Ucapan
          </h1>
        </div>

        {/* Form Komentar */}
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="nama" className="block mb-2 text-sm font-medium text-[#543f33]">
                Nama Anda
              </label>
              <input
                type="text"
                id="nama"
                value={nama}
                onChange={e => setNama(e.target.value)}
                className="bg-[#f8f5ec] border border-[#d1c1a4] text-[#543f33] text-sm rounded-lg focus:ring-[#543f33] focus:border-[#543f33] block w-full p-2.5"
                placeholder="Nama"
                required
              />
            </div>
            <div>
              <label htmlFor="kehadiran" className="block mb-2 text-sm font-medium text-[#543f33]">
                Konfirmasi Kehadiran
              </label>
              <select
                id="kehadiran"
                value={kehadiran}
                onChange={e => setKehadiran(e.target.value)}
                className="bg-[#f8f5ec] border border-[#d1c1a4] text-[#543f33] text-sm rounded-lg focus:ring-[#543f33] focus:border-[#543f33] block w-full p-2.5"
              >
                <option value="">Pilih opsi</option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Belum Pasti">Belum Pasti</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="komentar" className="block mb-2 text-sm font-medium text-[#543f33]">
              Ucapan/Pesan
            </label>
            <textarea
              id="komentar"
              rows="4"
              value={komentar}
              onChange={e => setKomentar(e.target.value)}
              className="bg-[#f8f5ec] border border-[#d1c1a4] text-[#543f33] text-sm rounded-lg focus:ring-[#543f33] focus:border-[#543f33] block w-full p-2.5"
              placeholder="Tulis ucapan atau pesan untuk mempelai..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="text-white bg-[#543f33] hover:bg-[#3a2d23] focus:ring-4 focus:outline-none focus:ring-[#d1c1a4] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Mengirim...' : 'Kirim Ucapan'}
          </button>

          {error && (
            <div className="mt-4 p-2 text-sm text-red-600 bg-red-50 rounded-lg">{error}</div>
          )}

          {success && (
            <div className="mt-4 p-2 text-sm text-green-600 bg-green-50 rounded-lg">{success}</div>
          )}
        </form>

        {/* Daftar Komentar */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold mb-6">Ucapan dari Tamu Undangan</h2>

          {loading && komentarList.length === 0 ? (
            <p>Memuat komentar...</p>
          ) : komentarList.length === 0 ? (
            <p>Belum ada komentar. Jadilah yang pertama mengucapkan selamat!</p>
          ) : (
            <div className="space-y-4">
              {komentarList.map(item => (
                <div
                  key={item.id}
                  className="p-4 bg-[#f8f5ec] rounded-lg shadow-sm border border-[#d1c1a4] text-left"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[#543f33]">{item.nama}</h3>
                    <span className="text-xs text-gray-500">
                      {new Date(item.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm mb-2">{item.komentar}</p>
                  {item.kehadiran && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item.kehadiran === 'Hadir'
                          ? 'bg-green-100 text-green-800'
                          : item.kehadiran === 'Tidak Hadir'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {item.kehadiran}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
