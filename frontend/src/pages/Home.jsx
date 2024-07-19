import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative h-[100dvh] bg-[#F7F7F7] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -inset-2 bg-[url('/homepage.jpg')] bg-cover bg-center blur-sm">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full text-white">
        <h1 className="text-4xl sm:text-5xl">Welcome to TravelWish!</h1>
        <p className=" w-[410px] sm:text-xl sm:w-[510px]">
          Create and manage your personal travel wishlist, explore new
          destinations, and share your travel plans with friends and family.
          Start your journey today and make your travel dreams come true!
        </p>
        <Link to="/test">
          <button className="bg-[#1b947c] hover:bg-[#1e6b5c] text-lg px-2 py-4 rounded-md">
            Ready to explore? Let's get started!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
