type PageChange = 'next' | 'prev';

function Pagination({
  handlePageChange,
  handleLimitChange,
  currentPage,
  limitPerPage,
}: {
  handlePageChange: (pageChange: PageChange) => void;
  handleLimitChange: (limitChange: number) => void;
  currentPage: number;
  limitPerPage: number;
}) {
  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className="flex justify-evenly border-t-2 border-cyan-800 p-2 align-middle text-sm"
    >
      <div className="flex flex-row gap-1">
        <button
          aria-label="Previous List Page"
          className="rounded-md border border-cyan-800 bg-slate-200 px-2 py-1 shadow-md hover:bg-slate-300"
          onClick={() => handlePageChange('prev')}
        >
          Previous
        </button>
        <p className="px-2 py-1">{currentPage}</p>
        <button
          aria-label="Next List Page"
          className="rounded-md border border-cyan-800 bg-slate-200 px-2 py-1 shadow-md hover:bg-slate-300"
          onClick={() => handlePageChange('next')}
        >
          Next
        </button>
      </div>
      <div className="flex flex-row gap-1">
        <p className="py-1">Limit:</p>
        <button
          aria-label="Show 10 items per page"
          className={`rounded-md border-cyan-800 px-2 py-1 shadow-md hover:bg-slate-300 ${
            limitPerPage === 10 ? 'border-2' : 'border'
          }`}
          onClick={() => {
            handleLimitChange(10);
          }}
        >
          10
        </button>
        <button
          aria-label="Show 20 items per page"
          className={`rounded-md border-cyan-800 bg-slate-200 px-2 py-1 shadow-md hover:bg-slate-300 ${
            limitPerPage === 20 ? 'border-2' : 'border'
          }`}
          onClick={() => {
            handleLimitChange(20);
          }}
        >
          20
        </button>
        <button
          aria-label="Show 30 items per page"
          className={`rounded-md border-cyan-800 bg-slate-200 px-2 py-1 shadow-md hover:bg-slate-300 ${
            limitPerPage === 30 ? 'border-2' : 'border'
          }`}
          onClick={() => {
            handleLimitChange(30);
          }}
        >
          30
        </button>
      </div>
    </nav>
  );
}

export default Pagination;
