import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-between mx-10 -mb-10 mt-5">
      <Image
        src="/logo.svg"
        alt="logo"
        width={118}
        height={18}
        className="object-contain"
      />

      <p className="text-base text-gray-500 mr-8 rounded-full bg-white z-10 px-5 py-1">Sign In </p>
    </div>
  );
};

export default Navbar
