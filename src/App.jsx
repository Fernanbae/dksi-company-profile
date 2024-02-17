import HeroSection from "./components/sections/Hero";
import OfferingSection from "./components/sections/Offering";
import OverviewSection from "./components/sections/Overview";
import ServicesSection from "./components/sections/Services";
import NavBar from "./components/ui/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <main>
                <HeroSection />
                <OfferingSection />
                <OverviewSection />
                <ServicesSection />
            </main>
            <footer>{/* TODO: Create footer component */}</footer>
        </>
    );
}

export default App;
