import Image from "next/image";


export default function CashiaDashboard() {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-tr from-cashia-white via-cashia-white to-cashia-lpink text-cashia-dark-gray antialiased font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-64 flex-shrink-0 px-8 py-10 flex flex-col gap-y-10">
        <div className="flex items-center gap-2.5 px-2">
          <div className="w-7 h-7 rounded-full  flex items-center justify-center text-cashia-white font-bold text-base shadow-sm">
            <Image src="/Vector.svg" alt="" width={30} height={30} />
          </div>
          <span className="text-2xl font-black tracking-tight text-cashia-red">Cashia</span>
        </div>

        <nav className="flex flex-col gap-y-3">
          <a href="#" className="flex items-center gap-3.5 px-6 py-3.5 bg-cashia-black text-cashia-white rounded-full font-semibold text-sm shadow-sm">
            <Image src="/home.svg" alt="" width={20} height={20} />
            Home
          </a>
          <a href="#" className="flex items-center gap-3.5 px-6 py-3.5 text-cashia-black hover:bg-cashia-light-gray  rounded-full font-semibold text-sm transition-all">
            <Image src="/bill.svg" alt="" width={20} height={20} />
            Bills
          </a>
          <a href="#" className="flex items-center gap-3.5 px-6 py-3.5 text-cashia-black hover:bg-cashia-light-gray  rounded-full font-semibold text-sm transition-all">
            <Image src="/chart.svg" alt="" width={20} height={20} />
            Analytics
          </a>
        </nav>
      </aside>

      {/* MAIN CONTENT WINDOW */}
      <main className="flex-1 px-14 py-10 max-w-7xl">
        
        <header className="flex justify-end items-center mb-8">
          <button className="flex items-center gap-2.5 text-cashia-black  font-semibold text-sm transition">
            <div className="w-9 h-9 rounded-full bg-cashia-white flex items-center justify-center ">
              <Image src="/user.svg" alt="" width={20} height={20} />
            
            </div>
            Account
          </button>
        </header>

        {/* Status Notice */}
        <div className="bg-cashia-light-gray border-cashia-white rounded-2xl p-4 flex items-start gap-4 mb-10 max-w-4xl">
          <div className="p-2 bg-[url('/star.svg')] />">
            <Image src="/gift.svg" alt="" width={20} height={20} />
            </div>

          <div>
            <h4 className="font-bold text-sm text-slate-900">You were rewarded KES 100!</h4>
            <p className="text-xs text-cashia-mid-gray mt-0.5 font-medium">You were rewarded for successfully signing up to Cashia.</p>
          </div>
        </div>

        {/* Balance Section */}
        <section className="mb-10">
          <span className="text-xs font-normal text-cashia-black tracking-wide">Your Balance</span>
          <div className="flex items-center gap-3.5 mt-1.5 mb-6">
            <h1 className="text-[40px] font-normal tracking-tight text-cashia-black">KES 100.00</h1>
            <button className="text-slate-400 hover:text-slate-600 transition self-center mt-1">
              <Image  src="/eye-slash.svg" alt="" width={20} height={20} />
            </button>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <button className="flex items-center gap-2 bg-cashia-red  text-white font-bold text-sm px-7 py-3 rounded-full transition shadow-sm">
               <Image  src="/add.svg" alt="" width={20} height={20} />
              Deposit
            </button>

            <button className="flex items-center gap-2 bg-white hover:bg-cashia-light-gray text-cashia-black border border-cashia-light-gray font-bold text-sm px-7 py-3 rounded-full transition shadow-sm">
               <Image  src="/arrow-down.svg" alt="" width={20} height={20} />
              Withdraw
            </button>

            <button className="flex items-center gap-2 bg-white hover:bg-cashia-light-gray text-cashia-black border border-cashia-light-gray font-bold text-sm px-7 py-3 rounded-full transition shadow-sm">
               <Image  src="/more.svg" alt="" width={20} height={20} />
              Do more
            </button>
          </div>
        </section>

        {/* Active Betika Transaction Prompt */}
        <section className="mb-12 max-w-xl">
          <div className="bg-cashia-white border border-cashia-light-gray rounded-[28px] p-6 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">

              <div className="flex items-center gap-3"> 
                <div>
                  <img 
                     src="/betika.png" 
                     alt="Betika Logo" 
                     width={40} 
                     height={40} 
                     className="object-contain" 
                   />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-cashia-mid-gray block mb-0.5">Payment Request</span>
                <h3 className="font-bold text-cashia-black text-sm tracking-tight">Betika: +254 753 777 888</h3>
                <h2 className="text-lg font-black text-cashia-black mt-0.5">KES 200.00</h2>
                <span className="text-[11px] font-bold text-cashia-orange block mt-1">Expires in 20 minutes</span>
              </div>
            </div>
            <button className="bg-cashia-red text-cashia-white font-bold text-sm px-6 py-2.5 rounded-full transition shadow-sm">
              View
            </button>
          </div>

  
        </section>

 {/* START */}


        {/* Empty History Indicator */}
        <section className="mb-14">
          <h3 className="text-lg font-black text-slate-900 mb-4 tracking-tight">Recent Transactions</h3>
          <div className="flex items-start gap-4 py-3 px-1">
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800">You have no recent transactions</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">Any transactions you make will be shown here.</p>
            </div>
          </div>
        </section>

        {/* App Utility Promo Ad Banner */}
        <section className="max-w-4xl bg-gradient-to-r from-sky-100 via-indigo-50 to-pink-50 border border-slate-100 rounded-[32px] p-8 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="z-10 max-w-sm">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Get the Cashia App</h2>
            <p className="text-slate-600 text-sm mt-1.5 mb-6 font-semibold">Instant transfers, lower fees, better experience</p>
            
            <div className="flex flex-wrap gap-3">
              <a href="#" className="bg-black hover:bg-slate-900 text-white flex items-center gap-2.5 px-4 py-2 rounded-xl transition shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.56 10.08c-.08-1.25.32-2.43 1.05-3.33a4.7 4.7 0 0 0-3.67-1.93c-1.57-.17-3.05.9-3.83.9-.79 0-2.02-.88-3.34-.85-1.7.03-3.29.98-4.15 2.5a6.45 6.45 0 0 0-.61 3.25c.18 2.22 1.4 3.86 2.57 5.5.58.83 1.25 1.76 2.17 1.72.9-.04 1.24-.58 2.33-.58 1.07 0 1.39.58 2.33.56.96-.02 1.55-.84 2.13-1.68.67-.97.94-1.92.96-1.97-.02-.01-1.85-.71-1.87-2.82M15.42 4.18c.64-.78 1.08-1.87.96-2.96-.94.04-2.08.63-2.76 1.42-.59.68-1.11 1.79-.97 2.86 1.05.08 2.12-.54 2.77-1.32z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[8px] block text-slate-400 font-bold uppercase tracking-wider mb-0.5">Download on the</span>
                  <span className="text-xs font-black block">App Store</span>
                </div>
              </a>
              <a href="#" className="bg-black hover:bg-slate-900 text-white flex items-center gap-2.5 px-4 py-2 rounded-xl transition shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.61 2.54c-.1.14-.16.34-.16.59v17.74c0 .25.06.45.16.59l.06.06L13.8 11.45v-.16L3.67 2.48l-.06.06zm11.13 8.9l2.97-2.97-3.51-2c-1-.57-2.64-.57-3.64 0l-2.6 2.6 6.78 6.37zm1.18 1.18l-3.26-3.26-6.84 6.84 2.72 2.72c1 .57 2.64.57 3.64 0l3.74-2.13c1-.57 1-1.5 0-2.07z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[8px] block text-slate-400 font-bold uppercase tracking-wider mb-0.5">Get it on</span>
                  <span className="text-xs font-black block">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Smartphone Visual Layout Overlays */}
          <div className="hidden md:flex items-center gap-5 relative top-5 select-none pointer-events-none">
            <div className="w-40 h-56 bg-white rounded-t-[28px] border-t-4 border-x-4 border-slate-900 p-2 shadow-2xl flex flex-col justify-between">
              <div className="w-12 h-3.5 bg-slate-900 rounded-full mx-auto mb-2" />
              <div className="bg-slate-50/80 p-2.5 rounded-xl flex-1 text-center flex flex-col justify-center border border-slate-100">
                <span className="text-[8px] text-slate-400 block font-bold">Your Balance</span>
                <span className="text-xs font-black text-slate-900 mt-0.5">KES 40,500.80</span>
              </div>
            </div>
            <div className="w-36 h-48 bg-slate-950 rounded-t-[24px] p-2 shadow-2xl flex flex-col justify-between">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-2" />
              <div className="bg-slate-900 p-2.5 rounded-xl flex-1 text-center flex flex-col justify-center border border-slate-800">
                <span className="text-[7px] text-slate-500 block font-bold">Your Balance</span>
                <span className="text-[10px] font-black text-white mt-0.5">KES 40,500.80</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}