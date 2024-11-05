const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/notes.json');

const readNotes = () => {
  const notes = fs.readFileSync(filePath);
  const parsedNotes = JSON.parse(notes);
  return parsedNotes;
};

const writeNotes = (notes) => {
  fs.writeFileSync(filePath, JSON.stringify(notes));
};

module.exports = { readNotes, writeNotes };