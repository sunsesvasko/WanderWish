function Header() {
  return (
    <header className="flex justify-between p-2 items-center  bg-[#32404f] text-[#1ABC9C]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl">WanderWish</h1>

      <ul className="flex gap-2 text-lg md:text-xl lg:text-2xl text-white">
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>

      <ul className="flex gap-2 text-lg md:text-xl lg:text-2xl text-white">
        <li>Login</li>
        <li>Register</li>
      </ul>
    </header>
  );
}

export default Header;
