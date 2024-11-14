
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-cover bg-center h-auto"
    style={{
      backgroundImage: "url('/house.jpg')",
    }} >
     
      <div className="bg-white bg-opacity-80 h-auto flex items-center justify-between px-8 ">
        <div className="w-1/2 ml-72">
          <h1 style={{ color: '#044E83'}}className="text-6xl font-bold font-sans mt-28 font-poppins">Governer Sindh</h1>
          <h1 style={{ color: '#044E83'}} className="text-5xl font-thin text-blue-600 font-sans mt-1">Kamran Khan Tessori</h1>
          <h1 style={{ color: '#2EB6E8'}} className="text-4xl font-bold text-blue-500 font-sans mt-5 ">Certified Cloud</h1>
          <h1 style={{ color: '#2EB6E8'}} className="text-4xl font-bold text-blue-500 font-sans">Applied Generative AI</h1> 
          <h1 style={{ color: '#2EB6E8'}} className="text-4xl font-bold text-blue-500 font-sans mb-5">Engineering (GenEng)</h1>
          <h1 style={{ color: '#044E83'}} className="text-2xl font-bold text-blue-600 font-sans mb-3 mt-3">Earn up to $5,000 / month</h1>
          <h1 style={{ color: '#044E83'}} className="text-2xl font-bold text-blue-600 font-sans mt-3">Now admissions are open in</h1>
          <h1 style={{ color: '#044E83'}} className="text-2xl font-bold text-blue-600 font-sans mb-5">Hyedrabad</h1> 
      <button  style={{ backgroundColor: '#044E83'}} className="text-white px-16 py-4 rounded font-sans font-bold mb-24">APPLY NOW</button>
        </div>
        <div className="w-1/3">
          <Image
            src="/g (1).png" 
            alt="Hero Image"
            width={800} 
            height={800} 
            className="object-cover min-w-[900px] lg:w-[600px] mt-10"
          />
        </div>
      </div>
     
    </div>
  );
}