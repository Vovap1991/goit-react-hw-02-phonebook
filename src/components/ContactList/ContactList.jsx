import { ListItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id}>{contact.name}</ListItem>
      ))}
    </ul>
  );
};
