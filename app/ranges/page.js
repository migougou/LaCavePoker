'use client';
import { useState } from 'react';

// Composant pour les boutons
const RangeButton = ({ onClick, label }) => (
  <button onClick={onClick} className="bg-white border border-gray-300 text-gray-800 font-bold py-1 px-2 rounded-lg shadow hover:bg-gray-200 w-12 h-12 flex items-center justify-center">
    {label}
  </button>
);

// Composant pour une section de tableau
const RangeSection = ({ title, columns, widthClass = "w-full" }) => (
  <div className={`bg-white border border-gray-300 shadow-lg rounded-xl p-4 ${widthClass}`}>
    <h2 className="text-lg font-semibold mb-2 text-center underline">{title}</h2>
    <div className={`grid grid-cols-${columns.length} gap-4`}>
      {columns.map((col, index) => (
        <div key={index} className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2 text-center py-2 h-16 flex items-center justify-center">{col.title}</h2>
          <div className="grid grid-cols-1 gap-2">
            {col.buttons.map((btn, btnIndex) => (
              <RangeButton key={btnIndex} onClick={() => col.onClick(btn.range)} label={btn.label} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Composant spécifique pour la section Nash
const NashSection = ({ title, columns }) => (
  <div className="bg-white border border-gray-300 shadow-lg rounded-xl p-4 w-full flex flex-col items-center">
    <h2 className="text-lg font-semibold mb-2 text-center underline">{title}</h2>
    <div className="flex space-x-4">
      {columns[0].buttons.map((btn, btnIndex) => (
        <RangeButton key={btnIndex} onClick={() => columns[0].onClick(btn.range)} label={btn.label} />
      ))}
    </div>
  </div>
);

export default function Ranges() {
  const [selectedRange, setSelectedRange] = useState(null);

  const handleButtonClick = (range) => {
    setSelectedRange(range);
  };

  const open3WayColumns = [
    {
      title: 'BTN',
      buttons: [
        { label: '25', range: 'open_3way_btn_25' },
        { label: '20', range: 'open_3way_btn_20' },
        { label: '15', range: 'open_3way_btn_15' },
        { label: '10', range: 'open_3way_btn_10' },
        { label: '5', range: 'open_3way_btn_5' },
      ],
      onClick: handleButtonClick,
    },
    {
      title: 'SB',
      buttons: [
        { label: '25', range: 'open_3way_sb_25' },
        { label: '20', range: 'open_3way_sb_20' },
        { label: '15', range: 'open_3way_sb_15' },
        { label: '10', range: 'open_3way_sb_10' },
        { label: '5', range: 'open_3way_sb_5' },
      ],
      onClick: handleButtonClick,
    },
  ];

  const def3WayColumns = [
    {
      title: 'BBvBTN',
      buttons: [
        { label: '25', range: 'def_3way_bbvsbtn_25' },
        { label: '20', range: 'def_3way_bbvsbtn_20' },
        { label: '15', range: 'def_3way_bbvsbtn_15' },
        { label: '10', range: 'def_3way_bbvsbtn_10' },
        { label: '5', range: 'def_3way_bbvsbtn_5' },
      ],
      onClick: handleButtonClick,
    },
    {
      title: 'SBvBTN',
      buttons: [
        { label: '25', range: 'def_3way_sbvsbtn_25' },
        { label: '20', range: 'def_3way_sbvsbtn_20' },
        { label: '15', range: 'def_3way_sbvsbtn_15' },
        { label: '10', range: 'def_3way_sbvsbtn_10' },
        { label: '5', range: 'def_3way_sbvsbtn_5' },
      ],
      onClick: handleButtonClick,
    },
    {
      title: 'BBvSB',
      buttons: [
        { label: '25', range: 'def_3way_bbvssb_25' },
        { label: '20', range: 'def_3way_bbvssb_20' },
        { label: '15', range: 'def_3way_bbvssb_15' },
        { label: '10', range: 'def_3way_bbvssb_10' },
        { label: '5', range: 'def_3way_bbvssb_5' },
      ],
      onClick: handleButtonClick,
    },
    {
      title: 'BB vs BTN+SB',
      buttons: [
        { label: '25', range: 'def_3way_bbvsbtn+sb_25' },
        { label: '20', range: 'def_3way_bbvsbtn+sb_20' },
        { label: '15', range: 'def_3way_bbvsbtn+sb_15' },
        { label: '10', range: 'def_3way_bbvsbtn+sb_10' },
        { label: '5', range: 'def_3way_bbvsbtn+sb_5' },
      ],
      onClick: handleButtonClick,
    },
  ];

  const headsUpColumns = [
    {
      title: 'SB',
      buttons: [
        { label: '25', range: 'heads_up_sb_25' },
        { label: '20', range: 'heads_up_sb_20' },
        { label: '15', range: 'heads_up_sb_15' },
        { label: '10', range: 'heads_up_sb_10' },
        { label: '5', range: 'heads_up_sb_5' },
      ],
      onClick: handleButtonClick,
    },
    {
      title: 'BBvSB Open',
      buttons: [
        { label: '25', range: 'heads_up_bbvssb_open_25' },
        { label: '20', range: 'heads_up_bbvssb_open_20' },
        { label: '15', range: 'heads_up_bbvssb_open_15' },
        { label: '10', range: 'heads_up_bbvssb_open_10' },
        { label: '5', range: 'heads_up_bbvssb_open_5' },
      ],
      onClick: handleButtonClick,
    },
    {
      title: 'BBvSB Limp',
      buttons: [
        { label: '25', range: 'heads_up_bbvssb_limp_25' },
        { label: '20', range: 'heads_up_bbvssb_limp_20' },
        { label: '15', range: 'heads_up_bbvssb_limp_15' },
        { label: '10', range: 'heads_up_bbvssb_limp_10' },
        { label: '5', range: 'heads_up_bbvssb_limp_5' },
      ],
      onClick: handleButtonClick,
    },
    {
      title: 'Call vs Shove',
      buttons: [
        { label: '25', range: 'heads_up_callvsshove_25' },
        { label: '20', range: 'heads_up_callvsshove_20' },
        { label: '15', range: 'heads_up_callvsshove_15' },
        { label: '10', range: 'heads_up_callvsshove_10' },
        { label: '5', range: 'heads_up_callvsshove_5' },
      ],
      onClick: handleButtonClick,
    },
  ];

  const nashColumns = [
    {
      title: '',
      buttons: [
        { label: 'Push', range: 'nash_push' },
        { label: 'Call', range: 'nash_call' },
      ],
      onClick: handleButtonClick,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold">RANGES</h1>
        </header>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-2 space-y-4">
            <RangeSection title="Open 3Way" columns={open3WayColumns} widthClass="w-48" />
            <NashSection title="Nash" columns={nashColumns} widthClass="w-48" />
          </div>
          <div className="col-span-4 space-y-4">
            <RangeSection title="DEF 3Way" columns={def3WayColumns} />
            <RangeSection title="Heads UP" columns={headsUpColumns} />
          </div>
          <div className="col-span-4 space-y-2">
            {/* Section pour afficher les images OPEN et LIMP */}
            {selectedRange && (
              <>
                <div className="bg-white shadow rounded">
                  <h3 className="text-xl text-center font-bold mb-2">OPEN</h3>
                  <img src={`/images/BBvBTN OPEN.png`} alt="Open" className="w-full" />
                </div>
                <div className="bg-white shadow rounded">
                  <h3 className="text-xl text-center font-bold mb-2">LIMP</h3>
                  <img src={`/images/BBvBTN LIMP.png`} alt="Limp" className="w-full" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
