import Nav from "@/components/Nav";
import Image from 'next/image';
import trust1 from "@/assets/trust.png"
import trust2 from "@/assets/trust1.png"

export default function Home() {
  return (
    <div className="bg-slate-900 h-[100vh]">
      <Nav></Nav>
      <div className="bg-slate-900 w-full h-[80vh] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[55px] font-bold font-mono">How booking should booking</h2>
          <p className="text-[23px] font-sans font-bold text-blue-200">Forget the old rules. You can book Hostels / Hotels Online Here.</p>
          <div className="mt-[80px] bg-slate-800 w-[350px]">
            <button className="bg-slate-600 p-[8px] rounded-[0px] font-bold w-[150px] text-[15px]">Explore</button>
            <span className="text-slate-400 ml-[20px]">&gt;&gt; Hostels / Hotels</span>
          </div>
        </div>
      </div>
      <div className="pl-[150px] bg-white roundedl">
        <div>
          <h2 className="text-slate-300 font-bold">Trusted By:</h2>
          <div className="flex bg-white w-[500px] h-[100px] justify-between items-center p-[20px]">
            <Image src={trust1} alt="Trust 1" width={200} height={100}  className="h-[30px]"/>
            <Image src={trust2} alt="Trust 2" width={100} height={100} className="h-[30px]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
