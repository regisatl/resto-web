import { Link } from 'react-scroll';

const ButtonContact = (props) => {
    return (
        <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all duration-500 rounded-full sm:hidden lg:block"
        >
            {props.title}
        </Link>
    );
};

export default ButtonContact;
