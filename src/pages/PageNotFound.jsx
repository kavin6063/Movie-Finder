import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
const PageNotFound = () => {
  return (
    <>
      <main className="min-h-screen p-4 flex flex-col items-center">
        <section className="relative text-center">
          <img className=" z-10" src="404.jpg" alt="" />

          <Link to={"/"}>
            <button>
              <img
                className="h-[65px] w-[100px] absolute top-[218px] right-[400px] z-20 transform rotate-12"
                src="top-hat.png"
                alt=""
              />
            </button>
          </Link>
        </section>
        <Link to={"/"}>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex flex-row items-center justify-between gap-2"
          >
            <IoHomeOutline scale={25} />

            <span>Back To Home Page</span>
          </button>
        </Link>
      </main>
    </>
  );
};

export default PageNotFound;
