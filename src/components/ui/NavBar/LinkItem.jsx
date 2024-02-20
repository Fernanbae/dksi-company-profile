import PropTypes from "prop-types";

function LinkItem({
    title,
    href,
    highlight,
    dropdown,
    dropdownActive,
    onToggle,
    className,
    children,
}) {
    const itemClasses =
        "rounded-none md:rounded-md px-0 md:px-3 py-3.5 md:py-2 font-medium text-darken-jungle-green transition md:hover:bg-gray-200 w-full md:w-fit md:border-none border-b border-slate-200";
    const itemHighlightClasses =
        "text-center rounded-md px-3 py-2 text-white font-medium bg-gradient-to-r from-metallic-sunburst to-satin-sheen-gold w-full md:w-fit relative group";
    return (
        <li
            className={`relative flex md:static ${dropdown ? "flex-col" : undefined} ${className}`}
        >
            {!dropdown ? (
                <a
                    href={href}
                    className={highlight ? itemHighlightClasses : itemClasses}
                >
                    {title}
                    {highlight && (
                        <span className="absolute left-0 top-0 block h-full w-full rounded-md bg-gradient-to-b from-white/25 to-white/10 opacity-0 transition group-hover:opacity-100" />
                    )}
                </a>
            ) : (
                <>
                    <button
                        type="button"
                        onClick={onToggle}
                        className={`${itemClasses} inline-flex justify-between md:justify-normal`}
                    >
                        <span className="mr-1.5">{title}</span>
                        <div
                            className={`transition ${dropdownActive ? "rotate-180" : undefined}`}
                        >
                            <i
                                className={`
                                ri-arrow-down-s-line arrow-down-solutions text-darken-jungle-green/50 transition-all
                                ${dropdownActive ? "font-bold text-metallic-sunburst" : undefined}
                                `}
                            ></i>
                        </div>
                    </button>
                    {dropdownActive && (
                        <div className="static left-0 top-full w-full md:absolute">
                            {children}
                        </div>
                    )}
                </>
            )}
        </li>
    );
}

LinkItem.propTypes = {
    title: PropTypes.string,
    href: PropTypes.string,
    highlight: PropTypes.bool,
    dropdown: PropTypes.bool,
    dropdownActive: PropTypes.bool,
    onToggle: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default LinkItem;
