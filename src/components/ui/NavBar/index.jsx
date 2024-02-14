import PropTypes from "prop-types";

import TopBar from "./TopBar";

function NavBar({ topBar }) {
    return (
        <header className="sticky top-0 z-10">
            {topBar && (
                <TopBar href="https://mediaindonesia.com/humaniora/560191/pt-dksi-luncurkan-solusi-peralatan-telemedice-teranyar">
                    {
                        "[New] Introducing cutting-edge telemedicine equipment solutions! More Information ->"
                    }
                </TopBar>
            )}
            <nav className="max-container flex h-20 justify-between">
                {/* TODO: Create navigation links and company logo */}
            </nav>
        </header>
    );
}

NavBar.propTypes = {
    topBar: PropTypes.bool,
};

export default NavBar;
