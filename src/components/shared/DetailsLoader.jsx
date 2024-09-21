const DetailsLoader = () => {
  return (
    <main>
      <div className="relative bg-gray-800 text-white mt-1">
        <div className="absolute inset-0">
          <div className="w-full h-full object-cover opacity-40 bg-gray-700 animate-pulse"></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/4">
            <div className="rounded-lg shadow-lg bg-gray-700 animate-pulse w-full h-96"></div>
          </div>

          <div className="w-full lg:w-3/4 lg:pl-10">
            <div className="h-8 bg-gray-700 rounded-full animate-pulse w-3/4 mb-4"></div>

            <div className="flex items-center space-x-3 mb-4">
              <div className="h-6 bg-gray-700 rounded-full w-24 animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded-full w-16 animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded-full w-16 animate-pulse"></div>
            </div>

            <div className="h-4 bg-gray-700 rounded-full w-1/2 animate-pulse mb-6"></div>

            <div className="h-6 bg-gray-700 rounded-full animate-pulse w-full mb-6"></div>

            <div className="h-10 bg-blue-700 rounded-lg w-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsLoader;
