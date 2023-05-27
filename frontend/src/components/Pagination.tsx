type PageChange = 'next' | 'prev' | 'reset';

function Pagination({
  handlePageChange,
  handleLimitChange,
}: {
  handlePageChange: (pageChange: PageChange) => void;
  handleLimitChange: (limitChange: number) => void;
}) {
  return (
    <div className="flex flex-row justify-center gap-4 font-extrabold">
      <div>
        <button onClick={() => handlePageChange('prev')}>&larr;</button>
        <button onClick={() => handlePageChange('next')}>&rarr;</button>
      </div>
      <div>
        <button
          className="rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Limit Per Page
        </button>
        <div className="flex flex-col">
          <button onClick={() => handleLimitChange(10)} className="">
            10
          </button>
          <button onClick={() => handleLimitChange(20)} className="">
            20
          </button>
          <button onClick={() => handleLimitChange(30)} className="">
            30
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
