import HeroSection from "./components/sections/Hero";
import NavBar from "./components/ui/NavBar";

function App() {
    return (
        <>
            <NavBar topBar={true} />
            <main>
                <HeroSection />
            </main>
            <footer>
                {/* TODO: Create footer component */}
            </footer>
        </>
    );
}

export default App;
