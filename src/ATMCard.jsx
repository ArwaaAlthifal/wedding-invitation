import React from 'react'

const ATMCard = () => {
  return (
    <div className="w-[300px] h-auto rounded-2xl bg-gradient-to-br from-[#1F1F1F] to-[#2A2A2A] text-white p-6 shadow-2xl flex flex-col justify-between font-mono border border-gray-700 sm:w-[300px]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-400">BANK MANDIRI</p>
          <p className="text-lg font-bold tracking-wider mt-1">PLATINUM CARD</p>
        </div>
        <img
          src="./assets/mandiri.png"
          alt="Mandiri Logo"
          className="w-14"
        />
      </div>

      <div className="flex flex-col justify-between items-start mb-6">
        <p>NOMOR REKENING</p>
        <p className="tracking-widest text-xl">1060016796750</p>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs text-gray-400">CARD HOLDER</p>
          <p className="text-md font-semibold">JEFRI MAULIZAR</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">VALID THRU</p>
          <p className="text-md">07/25</p>
        </div>
      </div>
    </div>
  )
}

export default ATMCard
