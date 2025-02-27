import Image from "next/image";

export const Header = () => {
  return (
    <section className="w-full flex items-center fixed justify-between px-4 h-[100px] bg-[#131313] border-b-[1px] border-silver">
      <div className="flex items-center gap-3">
        <Image
          src={"/images/logo.webp"}
          width={100}
          height={80}
          alt="logo.svg"
        />
        <h1 className="text-xl font-bold text-white">Golden Casino</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-[80px] h-[50px] font-semibold bg-[#262626] hover:bg-black/10 flex items-center text-white cursor-pointer justify-center rounded-lg hover:text-[#ebbe7d]">
          Login
        </button>
        <button className="w-[80px] h-[50px] font-semibold bg-[#ebbe7d]  flex items-center text-black cursor-pointer justify-center rounded-lg">
          Sign Up
        </button>
      </div>
    </section>
  );
};
