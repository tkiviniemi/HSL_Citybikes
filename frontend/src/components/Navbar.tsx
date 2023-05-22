function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-900">
      <div className="max-w-screen-xl flex items-center justify-evenly mx-auto p-4">
        <a
          href="/"
          className="flex items-center self-center text-2xl font-semibold"
        >
          HSL Citybikes
        </a>
        <div className="w-full md:block md:w-auto">
          <ul className="font-medium flex flex-row p-2 md:space-x-8">
            <li>
              <a
                href="/"
                className="block text-slate-900 rounded hover:bg-gray-100 hover:text-slate-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/journeys"
                className="block text-slate-900 rounded hover:bg-gray-100 hover:text-slate-500"
              >
                Journeys
              </a>
            </li>
            <li>
              <a
                href="/stations"
                className="block text-slate-900 rounded hover:bg-gray-100 hover:text-slate-500"
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
