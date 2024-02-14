import PropTypes from "prop-types";

function TopBar({ href, children }) {
    return (
        <div className="bg-darken-jungle-green flex justify-center">
            <a
                href={href}
                className="max-container py-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
                {children}
            </a>
        </div>
    );
}

TopBar.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
};

export default TopBar;
