import PropTypes from 'prop-types';

const ContactsListItem = ({ name, number, id, onDelete }) => {
  return (
    <li className="contact-list-item">
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ContactsListItem;
