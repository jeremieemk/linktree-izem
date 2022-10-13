import Image from "next/image";

const Header = () => {
    return (
        <div className="w-full flex justify-center items-center h-36">
            <h1 className=" text-white text-4xl z-10 relative">iZemLinks </h1> 
            <div className='absolute top-12' >
            <Image
                    src="/wave.svg"
                    alt="arrow"
                    width={70}
                    height={100}
                />
            </div>
           
        </div>
        
    );
};

export default Header;