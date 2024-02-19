import PropTypes from "prop-types";

function TimelineLists({ children }) {
    return (
        <ol className="z-10 mt-16 grid w-full grid-cols-4 place-content-center place-items-center gap-y-4 md:grid-cols-6">
            {children}
        </ol>
    );
}

TimelineLists.propTypes = {
    children: PropTypes.node,
};

export default TimelineLists;
