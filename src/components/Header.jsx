import NB from "../assets/NB.png";

function Header() {
  return (
    <div className="px-16 pt-8">

      <div className="flex items-center">

        <img
          src={NB}
          alt="National Emblem"
          className="h-32"
        />

        <div className="ml-6">

          <h1 className="text-7xl font-bold text-[#0B2C84]">
            MeitY
          </h1>

          <p className="text-[#0B2C84] text-2xl">
            Ministry of Electronics and Information Technology
          </p>

          <p className="text-[#0B2C84] text-2xl">
            Government of India
          </p>

        </div>

      </div>

    </div>
  );
}

export default Header;