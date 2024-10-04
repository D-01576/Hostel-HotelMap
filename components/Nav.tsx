import Link from 'next/link'
export default function Nav(){
    return (
        <div className="bg-slate-800">
            <div className="bg-white h-[30px]"></div>
            <div className="text-white h-[60px] flex justify-around items-center">
                <div className="w-[300px] flex justify-between">
                    <Link href="/Hostels" className='bg-black p-[8px] rounded-[0px] font-bold'>Hostels</Link>
                    <Link href="/Hotels" className='bg-black p-[8px] rounded-[0px] font-bold '>Hotels</Link>
                    <Link href="/Hostels" className='bg-black p-[8px] rounded-[0px] font-bold '>Discuss</Link>
                </div>
                <div className="rounded-full h-[100px] w-[100px] bg-[#042556] mt-[-5px] text-white font-bold flex justify-center items-center border border-blue-100">Explore</div>
                <div className="w-[300px] flex justify-between">
                    <Link href="/manage" className='bg-black p-[8px] rounded-[0px] font-bold '>Wanna to list Hostel/Hotel?</Link>
                </div>
            </div>
        </div>
    )
}