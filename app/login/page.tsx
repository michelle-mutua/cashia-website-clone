"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";


export default function CashiaDashboard() {
  const router = useRouter();
  return (
    
   <div className="min-h-screen bg-cashia-white md:bg-gradient-to-tr from-cashia-white via-cashia-white to-cashia-lpink">

 {/* HEADER*/}
   <nav className="p-5 flex justify-between direction-row items-center  bg-cashia-white md:bg-gradient-to-br from-cashia-white via-cashia-white to-cashia-lpink sticky top-0 z-50">
      
         <div 
            onClick={() => router.back()} 
            className="flex items-center gap-2.5 px-2 cursor-pointer hover:opacity-80 transition"
           >
         <div className="w-7 h-7 rounded-full flex items-center justify-center text-cashia-white font-bold text-base shadow-sm">
         <Image src="/Vector.svg" alt="Logo" width={30} height={30} />
         </div>
    
         <span className="text-2xl font-bold tracking-tight text-cashia-red ">Cashia</span>
        </div>

          <button className="flex items-center gap-2.5 text-cashia-black  font-Akkurat text-sm transition">
            <div className="w-9 h-9 rounded-full bg-cashia-light-gray md:bg-cashia-white flex items-center justify-center ">
              <Image src="/user.svg" alt="" width={20} height={20} />
            
            </div>
           <span className="hidden md:inline">Account</span>
          </button>
        
          </nav>
        
         {/* SIDEBAR */}
<div className="flex">
   
<aside className="hidden md:flex w-[220px] flex-col px-10 py-10">

  <nav className="flex-1 flex flex-col  gap-y-3 ">
    <a href="#" className="flex items-center gap-3.5 px-6 py-3.5 bg-cashia-black text-cashia-white rounded-full font-normal font-Akkurat text-sm shadow-sm">
      <Image src="/home.svg" alt="" width={20} height={20} />
      Home
    </a>
    <a href="#" className="flex items-center gap-3.5 px-6 py-3.5 text-cashia-black bg-cashia-light-gray rounded-full font-Akkurat text-sm transition-all">
      <Image src="/bill.svg" alt="" width={20} height={20} />
      Bills
    </a>
    <a href="#" className="flex items-center gap-3.5 px-6 py-3.5 text-cashia-black bg-cashia-light-gray rounded-full font-Akkurat text-sm transition-all">
      <Image src="/chart.svg" alt="" width={20} height={20} />
      Analytics
    </a>
  </nav>

  <div className="h-10 invisible" />
</aside>




      {/* Hello*/}
      <main className="flex-1 px-10 py-10">
        
        
       {/* Mobile top  */}
      <div className="flex items-center gap-3.5 mb-8 md:hidden">
  
     <div className="w-12 h-12 rounded-full overflow-hidden relative bg-cashia-light-gray flex-shrink-0">
      <Image 
      src="/image.svg" 
      alt="Reuben" 
      width={48} 
      height={48} 
      className="object-cover"
    />
    </div>


    <span className="text-xl font-medium font-Akkurat text-cashia-black tracking-tight">
    Hello, Reuben!
    </span>
    </div>

      {/* MAIN CONTENT WINDOW */}
       <div>
       <div className="bg-cashia-light-gray rounded-xl p-4 flex items-start gap-4 mb-10 w-full hidden ">
         <div className="p-2 bg-[url('/star.svg')] />">
            <Image src="/gift.svg" alt="" width={20} height={20} />
            </div>

          <div>
            <h4 className="font-Akkurat text-sm text-slate-900">You were rewarded KES 100!</h4>
            <p className="text-xs text-cashia-mid-gray mt-0.5 font-Akkurat">You were rewarded for successfully signing up to Cashia.</p>
          </div>
        </div>

        {/* Balance Section */}
        <section className="mb-10">
          <div className="flex flex-col gap-y-0.5 ">
          <span className="text-xs font-Akkurat  text-cashia-black tracking-wide ">Your Balance</span>
          <div className="flex items-center gap-3.5  mb-6">
            <h1 className="text-[64px] leading-none  font-Akkurat  text-cashia-black">KES 100.00</h1>
            <button className="text-slate-400 hover:text-slate-600 transition self-center mt-1">
              <Image  src="/eye-slash.svg" alt="" width={20} height={20} />
            </button>
          </div>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <button className="flex items-center gap-2 bg-cashia-red  text-white font-Akkurat text-sm px-7 py-2.5 rounded-full  ">
               <Image  src="/add.svg" alt="" width={18} height={18} />
              Deposit
            </button>

            <button className="flex items-center gap-2 bg-white hover:bg-cashia-light-gray text-cashia-black border border-cashia-light-gray font-bold font-Akkurat text-sm px-7 py-2.5 rounded-full ">
               <Image  src="/arrow-down.svg" alt="" width={18} height={18} />
              Withdraw
            </button>

            <button className="flex items-center gap-2 bg-white hover:bg-cashia-light-gray text-cashia-black border border-cashia-light-gray font-bold font-Akkurat text-sm px-7 py-2.5 rounded-full t">
               <Image  src="/more.svg" alt="" width={18} height={18} />
              Do more
            </button>
          </div>
        </section>

        {/* Active Betika Transaction Prompt */}
        <section className="hidden md:flex mb-14 max-w-xl">
          <div className="bg-cashia-white border border-cashia-light-gray rounded-[28px] p-7  shadow-2xs flex items-center justify-between">
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
                <span className="text-xs font-Akkurat text-cashia-mid-gray block mb-0.5">Payment Request</span>
                <h3 className="font-bold font-Akkurat text-cashia-black text-sm tracking-tight">Betika: +254 753 777 888</h3>
                <h2 className="text-lg font-bold font-Akkurat text-cashia-black mt-0.5">KES 200.00</h2>
                <span className="text-[11px]  font-Akkurat text-cashia-orange block mt-1">Expires in 20 minutes</span>
              </div>
            </div>
            <button className="bg-cashia-red text-cashia-white font-bold text-sm px-6 py-2.5 rounded-full transition shadow-sm">
              View
            </button>
          </div>

  
        </section>



        {/* Empty History Indicator */}
        
        <section className="mb-8 ">
          <h3 className="text-2xl font-Akkurat text-cashia-black mb-4 tracking-tight">Recent Transactions</h3>
          <div className="flex items-start gap-4 py-3 px-1">
            <div className="w-11 h-11 rounded-full bg-cashia-light-gray border border-cashia-light-gray flex items-center justify-center text-cashia-light-gray">
              <Image  src="search-normal.svg" alt="" width={20} height={20} />
            </div>
            <div>
              <h4 className=" font-Akkurat text-base text-cashia-black">You have no recent transactions</h4>
              <p className="text-sm text-cashia-mid-gray mt-0.5 font-Akkurat font-medium">Any transactions you make will be shown here.</p>
            </div>
          </div>
        </section>

        {/* App Utility Promo Ad Banner */}
        <section className="hidden md:flex w-4xl bg-auto md:bg-[url('/bg-bottom.png')] border border-cashia-white rounded-[32px] p-10 relative overflow-hidden items-center justify-between gap-6">
        <div className="z-10 w-full md:w-auto p-4 md:p-5 border border-cashia-white/10 bg-cashia-white/20 backdrop-blur-xl rounded-xl shadow-lg">    
         <h2 className="text-3xl font-bold text-cashia-black font-akkurat tracking-tight">Get the Cashia App</h2>
            <p className="text-cashia-black text-l mt-1.5 mb-6 font-Akkurat">Instant transfers, lower fees, <br />better experience</p>
            
            <div className="flex flex-wrap gap-3">
               <Image  src="google-play.svg" alt="" width={150} height={150} />

              <Image  src="app-store.svg" alt="" width={150} height={150} />

            </div>
          </div>

         
         
        </section>
       </div>
      </main>
      </div>
    </div>
  );
}