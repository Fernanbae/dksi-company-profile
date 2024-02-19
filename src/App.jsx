import CompanySection from "./components/sections/Company";
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
                <CompanySection />
            </main>
            <footer>{/* TODO: Create footer component */}</footer>
        </>
    );
}

export default App;
