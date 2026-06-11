
import Image from 'next/image';

export default function Home() {


  return (
    <div className="bg-cashia-white min-h-screen text-cashia-black font-inter">

      <nav className="p-5 flex justify-between items-center bg-cashia-white shadow-sm sticky top-0 z-50">
        <h1 className="flex items-center gap-2 font-bold text-xl text-cashia-red">

          <Image src="/Vector.svg" alt="" width={30} height={30} />

          <span>CASHIA</span>
        </h1>

        <a href="#footer" className="bg-cashia-red text-cashia-white font-medium text-md px-4 py-2 rounded-lg hover:bg-cashia-white hover:text-cashia-red  hover:outline-2 hover:outline-cashia-red hover:opacity-90 transition"> Get in touch</a>


      </nav>

      {/* Hero Section */}
      <header className="bg-none md:bg-[url('/Rectangle.svg')]  relative background-size=50% bg-right bg-no-repeat flex pt-4 md:pt-20 pb-20 md:pb-70 px-4 w-full">

        <div className="text-left mt-16  max-w-2xl">
          
          <h2 className="text-6xl  font-extrabold tracking-tight mb-4 text-cashia-black">
            Designed to remove
          </h2>

          <h3 className="text-6xl   font-extrabold tracking-tight mb-4 text-cashia-black">
            friction and fear
          </h3>
          <p className="text-lg text-cashia-dark-gray mb-8">
            Money shouldn't feel heavy, awkward or risky.
          </p>
          <div className="flex flex-col md:flex-row gap-6 flex-wrap">
          <button id="get-started" className="bg-cashia-red text-cashia-white  font-medium px-8 py-3 rounded-xl text-lg hover:bg-cashia-white hover:text-cashia-red  hover:outline-2 hover:outline-cashia-red hover:opacity-90 transition">
            Get Started
          </button>

            <button id="register" className="bg-cashia-red text-cashia-white font-medium px-8 py-3 rounded-xl text-lg hover:bg-cashia-white hover:text-cashia-red hover:outline-2 hover:outline-cashia-red hover:opacity-90 transition">
              Register
            </button></div>

        </div>
      </header>



      {/* products */}
      <section className="py-16 bg-cashia-white  border-t border-b  border-cashia-mid-gray/60 " >
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">PRODUCTS</h3>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 border border-cashia-pink rounded-2xl bg-slate-50">
              <h4 className="text-xl font-bold mb-2 text-cashia-red">Individual</h4>
              <p className="text-cashia-dark-gray text-sm mb-4">Users can send or receive money instantly using a unique, Stika.</p>
              <ul className="text-xs text-cashia-mid-gray space-y-1 list-disc list-inside">
                <li>Masks personal details like phone numbers</li>
                <li>Shares money across networks</li>
                <li>Eliminates awkward follow-up text messages </li>
              </ul>
            </div>


            <div className="p-6 border border-cashia-pink rounded-2xl bg-slate-50">
              <h4 className="text-xl font-bold mb-2 text-cashia-red"> Business</h4>
              <p className="text-cashia-dark-gray text-sm mb-4">Manages payments for businesses of all sizes.</p>
              <ul className="text-xs text-cashia-mid-gray space-y-1 list-disc list-inside">
                <li>Available scan to pay for ease of payments</li>
                <li> Secure links for card or mobile payments</li>
                <li> Designed for E-commerce online businesses</li>
              </ul>
            </div>

            <div className="p-6 border border-cashia-pink rounded-2xl bg-slate-50">
              <h4 className="text-xl font-bold mb-2 text-cashia-red">Developer</h4>
              <p className="text-cashia-dark-gray text-sm mb-4">Offers secure, developer-friendly payment APIs and SDKs built for platforms in Kenya.</p>
              <ul className="text-xs text-cashia-mid-gray space-y-1 list-disc list-inside">
                <li>Offers flexible development tools</li>
                <li> Supports custom integrations for e-commerce</li>
                <li>Provides quick implementation</li>
              </ul>
            </div>


            <div className="p-6 border border-cashia-pink rounded-2xl bg-slate-50">
              <h4 className="text-xl font-bold mb-2 text-cashia-red">Agent</h4>
              <p className="text-cashia-dark-gray text-sm mb-4">Enables business owners to earn extra income by facilitating digital payment services within their communities.</p>
              <ul className="text-xs text-cashia-mid-gray space-y-1 list-disc list-inside">
                <li>Earn money on every customer account deposit you facilitate</li>
                <li>Earn rewards by recruiting new users onto the Cashia App.</li>
                <li>Fund customer accounts directly from your shop layout.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-cashia-white text-cashia-mid-gray py-12 border-t border-cashia-mid-gray">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h5 className="text-cashia-black font-bold mb-3">CASHIA</h5>
            <p className="text-xs">Licensed and regulated by the Central Bank of Kenya. </p>
          </div>
          <div>
            <h5 className="text-cashia-black font-bold mb-3">Legal & Safety</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="https://www.cashia.com/customer-terms-and-conditions/" target="_blank" className="hover:text-cashia-red">Customer Terms & Conditions</a></li>
              <li><a href="https://www.cashia.com/merchant-terms-and-conditions/" target="_blank" className="hover:text-cashia-red">Merchants Terms & Conditions</a></li>
              <li><a href="https://www.cashia.com/privacy/" target="_blank" className="hover:text-cashia-red">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-cashia-black font-bold mb-3">Support Contact</h5>
            <p className="text-xs ">WhatsApp Support: 0709 200 900</p>
            <p className="text-xs mt-1">Email: support@cashia.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}