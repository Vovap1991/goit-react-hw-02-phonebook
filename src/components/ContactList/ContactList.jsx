import { ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}:{''} {contact.number}
          <button
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </button>
        </ListItem>
      ))}
    </ul>
  );
};
