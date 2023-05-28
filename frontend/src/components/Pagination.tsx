import { useState } from 'react';
type PageChange = 'next' | 'prev' | 'reset';

function Pagination({
  handlePageChange,
  handleLimitChange,
}: {
  handlePageChange: (pageChange: PageChange) => void;
  handleLimitChange: (limitChange: number) => void;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between p-2">
      <button onClick={() => handlePageChange('prev')}>Previous</button>
      <button onClick={() => handlePageChange('next')}>Next</button>
      <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        Show Per Page
      </button>
      {isDropdownOpen && (
        <div className="flex flex-col">
          <button
            onClick={() => {
              handleLimitChange(10);
              setIsDropdownOpen(false);
            }}
          >
            10
          </button>
          <button
            onClick={() => {
              handleLimitChange(20);
              setIsDropdownOpen(false);
            }}
          >
            20
          </button>
          <button
            onClick={() => {
              handleLimitChange(30);
              setIsDropdownOpen(false);
            }}
          >
            30
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;
