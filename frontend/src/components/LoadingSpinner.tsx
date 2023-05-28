function LoadingSpinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-current border-slate-900 border-r-transparent"
        role="status"
      ></div>
    </div>
  );
}

export default LoadingSpinner;
