function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-slate-800 bg-cyan-800">
      <div className="mx-auto flex max-w-screen-xl items-center justify-evenly p-4">
        <a
          href="/journeys"
          className="flex items-center self-center text-2xl font-semibold text-slate-100 hover:text-cyan-600"
        >
          HSL Citybikes
        </a>
        <div className="w-full md:block md:w-auto">
          <ul className="flex flex-row p-2 font-medium md:space-x-8">
            <li>
              <a
                href="/journeys"
                className="block rounded px-2 py-1 text-slate-100 hover:bg-slate-200 hover:bg-opacity-10 hover:text-cyan-600"
              >
                Journeys
              </a>
            </li>
            <li>
              <a
                href="/stations"
                className="block rounded px-2 py-1 text-slate-100 hover:bg-slate-200 hover:bg-opacity-10 hover:text-cyan-600"
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
