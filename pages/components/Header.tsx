import Image from "next/image";

const Header = () => {
    return (
        <div className="w-full flex justify-center items-center h-28">
            <h1 className=" text-white text-4xl z-10 relative">iZem links</h1> 
            <div className='absolute top-8 ' >
            <Image
                    src="/arrow.svg"
                    alt="arrow"
                    width={70}
                    height={100}
                />
            </div>
           
        </div>
        
    );
};

export default Header;