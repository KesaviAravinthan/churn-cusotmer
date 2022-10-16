// import "./App.css";
import PredictionForm from "./components/predictionForm";
import TableauEmbeded from "./components/tableauEmbeded";
import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/predict" element={<PredictionForm />} />
              <Route path="/" element={<TableauEmbeded/>} />
            </Routes>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
