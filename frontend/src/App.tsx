import Cabeçalho from "./components/Cabeçalho";
import SalesCard from "./components/SalesCard";


function App() {
  return (
    <>
      <Cabeçalho />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
