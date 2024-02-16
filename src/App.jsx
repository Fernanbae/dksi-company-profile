import HeroSection from "./components/sections/Hero";
import OfferingSection from "./components/sections/Offering";
import NavBar from "./components/ui/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <main>
                <HeroSection />
                <OfferingSection />
            </main>
            <footer>{/* TODO: Create footer component */}</footer>
        </>
    );
}

export default App;
