import { nanoid } from 'nanoid';

export const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => {
        <li key={(contact.id = nanoid())}>{contact.name}</li>;
      })}
    </ul>
  );
};
