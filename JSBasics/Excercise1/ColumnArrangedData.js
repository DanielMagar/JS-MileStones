const data = [
    {name: "ABC", contact: "[{\"last_name\":\"JKL\", \"telephone\":\"987667889\"}, {\"last_name\":\"JKL\", \"telephone\":\"987667889\"}]"},
    {name: "DEF", contact: "[{\"last_name\":\"MNB\", \"telephone\":\"567867889\"}]"},
   ]
   
   const formatContact = (contact) => {
     let parsedContact;
   
     if (typeof contact === "string") {
       // Unescape and parse the contact string if it's a string
       const unescapedContact = contact.replace(/\\"/g, '"');
       parsedContact = JSON.parse(unescapedContact);
     } else {
       // If it's already an object, use it directly
       parsedContact = contact;
     }
   
     const details = parsedContact.map(
       ({ last_name, telephone }) =>
         `Last Name: ${last_name}\nTelephone: ${telephone}`
     ).join('\n\n');
     
     return details;
   };
   
   // Map over the data and format each contact
   data.forEach(({ name, contact }) => {
     const formattedContact = formatContact(contact);
     console.log(`Name: ${name}`);
     console.log(formattedContact);
   });
   