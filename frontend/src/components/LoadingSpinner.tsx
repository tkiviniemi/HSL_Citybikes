function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-current border-r-transparent border-slate-900"
        role="status"
      ></div>
    </div>
  );
}

export default LoadingSpinner;
