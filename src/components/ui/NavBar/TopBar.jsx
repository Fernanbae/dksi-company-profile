import PropTypes from "prop-types";

function TopBar({ href, children }) {
    return (
        <div className="flex justify-center bg-darken-jungle-green">
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
