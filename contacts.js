const fs = require("fs/promises");
fs.readFile("db/contacts.json", "utf-8").then(data => console.log(data))
  .catch(error => console.log(error.mesage))

const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");
  /*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}