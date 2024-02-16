import PropTypes from "prop-types";

function HeroImage({ href, img }) {
    return (
        <a href={href} target="_blank" className="w-full">
            <img
                src={`${img}`}
                alt=""
                className="w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.1)]"
            />
        </a>
    );
}

HeroImage.propTypes = {
    href: PropTypes.string,
    img: PropTypes.string,
};

export default HeroImage;
