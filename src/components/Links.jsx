import PropTypes from "prop-types";

const Links = ({ text}) => {
    return <a >{text}</a>
}

Links.propTypes = {
    text: PropTypes.string,
}

export default Links;