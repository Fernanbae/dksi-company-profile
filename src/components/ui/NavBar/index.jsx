import PropTypes from "prop-types";

import TopBar from "./TopBar";

import logoCrown from "../../../assets/sprites/logo-crown.svg";
import logoText from "../../../assets/sprites/logo-text.svg";
import LinkLists from "./LinkLists";

function NavBar({ topBar }) {
    return (
        <header className="sticky top-0 z-50 bg-white">
            {topBar && (
                <TopBar href="https://mediaindonesia.com/humaniora/560191/pt-dksi-luncurkan-solusi-peralatan-telemedice-teranyar">
                    {
                        "[New] Introducing cutting-edge telemedicine equipment solutions! More Information ->"
                    }
                </TopBar>
            )}
            <nav className="max-container flex h-20 items-center justify-between">
                <a href="/" className="inline-flex items-center gap-4">
                    <img
                        src={`${logoCrown}`}
                        alt="A regal crown design representing DKSI, with intricate details and a majestic presence."
                        className="w-10"
                    />
                    <img
                        src={`${logoText}`}
                        alt="A black and white image of the letters 'DKSI' written in a bold font on a plain background."
                        className="hidden w-16 sm:block"
                    />
                </a>
                <LinkLists />
            </nav>
        </header>
    );
}

NavBar.propTypes = {
    topBar: PropTypes.bool,
};

export default NavBar;
