function Navbar() {
  return (
    <nav className="border-b border-slate-900 bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-evenly p-4">
        <a
          href="/"
          className="flex items-center self-center text-2xl font-semibold"
        >
          HSL Citybikes
        </a>
        <div className="w-full md:block md:w-auto">
          <ul className="flex flex-row p-2 font-medium md:space-x-8">
            <li>
              <a
                href="/"
                className="block rounded text-slate-900 hover:bg-gray-100 hover:text-slate-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/journeys"
                className="block rounded text-slate-900 hover:bg-gray-100 hover:text-slate-500"
              >
                Journeys
              </a>
            </li>
            <li>
              <a
                href="/stations"
                className="block rounded text-slate-900 hover:bg-gray-100 hover:text-slate-500"
              >
                Stations
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
