import { render, screen, fireEvent } from '@testing-library/react';
import jest from 'jest-mock';
import Pagination from './Pagination';

test('renders Pagination component', () => {
  const handlePageChange = jest.fn();
  const handleLimitChange = jest.fn();
  const currentPage = 1;
  const limitPerPage = 10;

  render(
    <Pagination
      handlePageChange={handlePageChange}
      handleLimitChange={handleLimitChange}
      currentPage={currentPage}
      limitPerPage={limitPerPage}
    />
  );

  const paginationElement = screen.getByRole('navigation');
  expect(paginationElement).toBeInTheDocument();
});

test('calls handlePageChange with "prev" when previous button is clicked', () => {
  const handlePageChange = jest.fn();
  const handleLimitChange = jest.fn();
  const currentPage = 1;
  const limitPerPage = 10;

  render(
    <Pagination
      handlePageChange={handlePageChange}
      handleLimitChange={handleLimitChange}
      currentPage={currentPage}
      limitPerPage={limitPerPage}
    />
  );

  const prevButton = screen.getByLabelText('Previous List Page');
  fireEvent.click(prevButton);

  expect(handlePageChange).toHaveBeenCalledWith('prev');
});

test('calls handlePageChange with "next" when next button is clicked', () => {
  const handlePageChange = jest.fn();
  const handleLimitChange = jest.fn();
  const currentPage = 1;
  const limitPerPage = 10;

  render(
    <Pagination
      handlePageChange={handlePageChange}
      handleLimitChange={handleLimitChange}
      currentPage={currentPage}
      limitPerPage={limitPerPage}
    />
  );

  const nextButton = screen.getByLabelText('Next List Page');
  fireEvent.click(nextButton);

  expect(handlePageChange).toHaveBeenCalledWith('next');
});

test('calls handleLimitChange with the selected limit when limit button is clicked', () => {
  const handlePageChange = jest.fn();
  const handleLimitChange = jest.fn();
  const currentPage = 1;
  const limitPerPage = 10;

  render(
    <Pagination
      handlePageChange={handlePageChange}
      handleLimitChange={handleLimitChange}
      currentPage={currentPage}
      limitPerPage={limitPerPage}
    />
  );

  const limitButton = screen.getByLabelText('Show 20 items per page');
  fireEvent.click(limitButton);

  expect(handleLimitChange).toHaveBeenCalledWith(20);
});

test('renders current page correctly', () => {
  const handlePageChange = jest.fn();
  const handleLimitChange = jest.fn();
  const currentPage = 3;
  const limitPerPage = 10;

  render(
    <Pagination
      handlePageChange={handlePageChange}
      handleLimitChange={handleLimitChange}
      currentPage={currentPage}
      limitPerPage={limitPerPage}
    />
  );

  const currentPageElement = screen.getByText('3');
  expect(currentPageElement).toBeInTheDocument();
});
