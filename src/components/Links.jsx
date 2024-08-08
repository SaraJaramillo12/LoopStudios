import PropTypes from "prop-types";

const Links = ({ text}) => {
    return (
    
        <li>
            <a href="#" >{text}</a>
        </li>
    );
}

Links.propTypes = {
    text: PropTypes.string,
}

export default Links;