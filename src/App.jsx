import Footer from "./components/Footer";
import Header from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
    <div className="bg-white dark:bg-slate-700 ">
      <Header />

      <AllRoutes />

      <Footer />
    </div>
  );
};

export default App;
