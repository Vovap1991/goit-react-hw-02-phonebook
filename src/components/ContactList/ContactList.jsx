export const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => {
        <li key={contact.id}>{contact.name}</li>;
      })}
    </ul>
  );
};
