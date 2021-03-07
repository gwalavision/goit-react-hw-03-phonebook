import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem';
import ContactsFinderInput from '../ContactsFinderInput';

const ContactsList = ({ title, contacts, filter, onChange, onDelete }) => {
  return (
    <div>
      <h2 className="header">{title}</h2>
      <ContactsFinderInput value={filter} onChange={onChange} />
      <ul>
        {contacts.map(({ name, id, number }) => (
          <ContactsListItem
            name={name}
            number={number}
            key={id}
            id={id}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactsList;
