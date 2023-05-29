type PageChange = 'next' | 'prev';

function Pagination({
  handlePageChange,
  handleLimitChange,
}: {
  handlePageChange: (pageChange: PageChange) => void;
  handleLimitChange: (limitChange: number) => void;
}) {
  return (
    <div className="flex justify-evenly border-t-2 border-cyan-800 p-2 align-middle text-sm">
      <div className="flex flex-row gap-1">
        <button
          className="rounded-md border border-cyan-800 bg-slate-200 px-2 py-1"
          onClick={() => handlePageChange('prev')}
        >
          Previous
        </button>
        <button
          className="rounded-md border border-cyan-800 bg-slate-200 px-2 py-1"
          onClick={() => handlePageChange('next')}
        >
          Next
        </button>
      </div>
      <div className="flex flex-row gap-1">
        <p className="py-1">Limit:</p>
        <button
          className="rounded-md border border-cyan-800 bg-slate-200 px-2 py-1"
          onClick={() => {
            handleLimitChange(10);
          }}
        >
          10
        </button>
        <button
          className="rounded-md border border-cyan-800 bg-slate-200 px-2 py-1"
          onClick={() => {
            handleLimitChange(20);
          }}
        >
          20
        </button>
        <button
          className="rounded-md border border-cyan-800 bg-slate-200 px-2 py-1"
          onClick={() => {
            handleLimitChange(30);
          }}
        >
          30
        </button>
      </div>
    </div>
  );
}

export default Pagination;
