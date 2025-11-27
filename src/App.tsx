import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
        <Toaster />
      </main>
    </div>
  );
}

export default App;
