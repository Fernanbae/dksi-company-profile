import PropTypes from "prop-types";

function NavBrand({
    logoIcon,
    altLogoIcon,
    enableLogoText,
    logoText,
    altLogoText,
}) {
    function handleClick(event) {
        event.preventDefault();

        window.scrollTo({ top: 0 });
    }

    return (
        <a
            href="/"
            onClick={(e) => handleClick(e)}
            className="inline-flex items-center gap-4"
        >
            <img src={`${logoIcon}`} alt={altLogoIcon} className="w-10" />
            {enableLogoText && (
                <img
                    src={`${logoText}`}
                    alt={altLogoText}
                    className="hidden w-16 sm:block"
                />
            )}
        </a>
    );
}

NavBrand.propTypes = {
    logoIcon: PropTypes.string,
    altLogoIcon: PropTypes.string,
    enableLogoText: PropTypes.bool,
    logoText: PropTypes.string,
    altLogoText: PropTypes.string,
};

export default NavBrand;
