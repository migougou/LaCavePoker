'use client';
import { useState } from 'react';

export default function Ranges() {

  const [selectedRange, setSelectedRange] = useState(null);

  const handleButtonClick = (range) => {
    setSelectedRange(range);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold">RANGES</h1>
        </header>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5 space-y-6">
            {/* Open 3Way Section */}
            <div className="bg-white border border-gray-300 shadow-lg rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-2 text-center underline">Open 3Way</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 text-center">BTN</h2>
                  <div className="grid grid-cols-1 gap-2">
                    <button onClick={() => handleButtonClick('open_3way_btn_25')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">25</button>
                    <button onClick={() => handleButtonClick('open_3way_btn_20')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">20</button>
                    <button onClick={() => handleButtonClick('open_3way_btn_15')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">15</button>
                    <button onClick={() => handleButtonClick('open_3way_btn_10')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">10</button>
                    <button onClick={() => handleButtonClick('open_3way_btn_5')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">5</button>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 text-center">SB</h2>
                  <div className="grid grid-cols-1 gap-2">
                    <button onClick={() => handleButtonClick('open_3way_sb_25')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">25</button>
                    <button onClick={() => handleButtonClick('open_3way_sb_20')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">20</button>
                    <button onClick={() => handleButtonClick('open_3way_sb_15')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">15</button>
                    <button onClick={() => handleButtonClick('open_3way_sb_10')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">10</button>
                    <button onClick={() => handleButtonClick('open_3way_sb_5')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">5</button>
                  </div>
                </div>
              </div>
            </div>

            {/* DEF 3Way Section */}
            <div className="bg-white border border-gray-300 shadow-lg rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-2 text-center underline">DEF 3Way</h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 text-center">BBvBTN</h2>
                  <div className="grid grid-cols-1 gap-2">
                    <button onClick={() => handleButtonClick('def_3way_bbvsbtn_25')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">25</button>
                    <button onClick={() => handleButtonClick('def_3way_sbvsbtn_20')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">20</button>
                    <button onClick={() => handleButtonClick('def_3way_bbvsbtn_15')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">15</button>
                    <button onClick={() => handleButtonClick('def_3way_sbvsbtn_10')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">10</button>
                    <button onClick={() => handleButtonClick('def_3way_sbvsbtn_5')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">5</button>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 text-center">SBvBTN</h2>
                  <div className="grid grid-cols-1 gap-2">
                    <button onClick={() => handleButtonClick('def_3way_sbvsbtn_25')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">25</button>
                    <button onClick={() => handleButtonClick('def_3way_sbvsbtn_20')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">20</button>
                    <button onClick={() => handleButtonClick('def_3way_sbvsbtn_15')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">15</button>
                    <button onClick={() => handleButtonClick('def_3way_sbvsbtn_10')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">10</button>
                    <button onClick={() => handleButtonClick('def_3way_sbvsbtn_5')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">5</button>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 text-center">BBvSB</h2>
                  <div className="grid grid-cols-1 gap-2">
                    <button onClick={() => handleButtonClick('def_3way_bbvssb_25')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">25</button>
                    <button onClick={() => handleButtonClick('def_3way_bbvssb_20')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">20</button>
                    <button onClick={() => handleButtonClick('def_3way_bbvssb_15')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">15</button>
                    <button onClick={() => handleButtonClick('def_3way_bbvssb_10')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">10</button>
                    <button onClick={() => handleButtonClick('def_3way_bbvssb_5')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">5</button>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 text-center">BB vs BTN+SB</h2>
                  <div className="grid grid-cols-1 gap-2">
                    <button onClick={() => handleButtonClick('def_3way_bbvsbtn+sb_25')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">25</button>
                    <button onClick={() => handleButtonClick('def_3way_bbvsbtn+sb_20')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">20</button>
                    <button onClick={() => handleButtonClick('def_3way_bbvsbtn+sb_15')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">15</button>
                    <button onClick={() => handleButtonClick('def_3way_bbvsbtn+sb_10')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">10</button>
                    <button onClick={() => handleButtonClick('def_3way_bbvsbtn+sb_5')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">5</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Heads Up Section */}
            <div className="bg-white border border-gray-300 shadow-lg rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-2 text-center underline">Heads UP</h2>
              <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 text-center">SB</h2>
                  <div className="grid grid-cols-1 gap-2">
                    <button onClick={() => handleButtonClick('heads_up_sb_25')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">25</button>
                    <button onClick={() => handleButtonClick('heads_up_sb_20')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">20</button>
                    <button onClick={() => handleButtonClick('heads_up_sb_15')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">15</button>
                    <button onClick={() => handleButtonClick('heads_up_sb_10')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">10</button>
                    <button onClick={() => handleButtonClick('heads_up_sb_5')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">5</button>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 text-center">BBvSB Open</h2>
                  <div className="grid grid-cols-1 gap-2">
                    <button onClick={() => handleButtonClick('heads_up_bbvssb_open_25')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">25</button>
                    <button onClick={() => handleButtonClick('heads_up_bbvssb_open_20')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">20</button>
                    <button onClick={() => handleButtonClick('heads_up_bbvssb_open_15')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">15</button>
                    <button onClick={() => handleButtonClick('heads_up_bbvssb_open_10')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">10</button>
                    <button onClick={() => handleButtonClick('heads_up_bbvssb_open_5')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">5</button>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 text-center">BBvSB Limp</h2>
                  <div className="grid grid-cols-1 gap-2">
                    <button onClick={() => handleButtonClick('heads_up_bbvssb_limp_25')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">25</button>
                    <button onClick={() => handleButtonClick('heads_up_bbvssb_limp_20')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">20</button>
                    <button onClick={() => handleButtonClick('heads_up_bbvssb_limp_15')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">15</button>
                    <button onClick={() => handleButtonClick('heads_up_bbvssb_limp_10')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">10</button>
                    <button onClick={() => handleButtonClick('heads_up_bbvssb_limp_5')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">5</button>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-2 text-center">Call vs Shove</h2>
                  <div className="grid grid-cols-1 gap-2">
                    <button onClick={() => handleButtonClick('heads_up_callvsshove_25')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">25</button>
                    <button onClick={() => handleButtonClick('heads_up_callvsshove_20')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">20</button>
                    <button onClick={() => handleButtonClick('heads_up_callvsshove_15')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">15</button>
                    <button onClick={() => handleButtonClick('heads_up_callvsshove_10')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">10</button>
                    <button onClick={() => handleButtonClick('heads_up_callvsshove_5')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">5</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Nash Section */}
            <div className="bg-white border border-gray-300 shadow-lg rounded-xl p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2 text-center underline">Nash</h2>
              <div className="grid grid-cols-2 gap-10">
                <button onClick={() => handleButtonClick('nash_push')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-28 h-12 flex items-center justify-center">Push</button>
                <button onClick={() => handleButtonClick('nash_call')} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-28 h-12 flex items-center justify-center">Call</button>
              </div>
            </div>
          </div>

          <div className="col-span-7 space-y-6">
            {/* Section pour afficher les images OPEN et LIMP */}
            {selectedRange && (
              <>
                <div className="bg-white p-6 shadow rounded">
                  <h3 className="text-xl font-semibold mb-4">OPEN</h3>
                  <img src={`/images/${selectedRange}_open.png`} alt="Open" className="w-full" />
                </div>
                <div className="bg-white p-6 shadow rounded">
                  <h3 className="text-xl font-semibold mb-4">LIMP</h3>
                  <img src={`/images/${selectedRange}_limp.png`} alt="Limp" className="w-full" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
