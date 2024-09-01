import Header from "@/components/header";
import Footer from "./components/footer";
import CardGrid from "@/features/card-grid";
import Moves from "@/features/moves";

const App = () => (
  <>
    <Header />
    <section className="container mx-auto px-4 pb-5 max-w-3xl mt-10">
      <section className="p-4">
        <Moves />
      </section>
      <CardGrid />
    </section>
    <Footer />
  </>
);

export default App;
