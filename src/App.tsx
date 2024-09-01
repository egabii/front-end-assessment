import { Footer, Header } from "./ui/layout";
import CardGrid from "@/features/card-grid";
import Moves from "@/features/moves";
import ResetButton from "./features/reset-button";

const App = () => {
  return (
    <>
      <Header>
        <ResetButton />
      </Header>
      <section className="container mx-auto px-4 pb-5 max-w-3xl mt-10">
        <Moves />
        <CardGrid />
      </section>
      <Footer />
    </>
  );
};

export default App;
