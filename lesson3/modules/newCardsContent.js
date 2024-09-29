import Element from "../constructor/Element.js";

const newCards = [
  'Same Card 1',
  'Same Card 2',
  'Same Card 3',
  'Same Card 4',
  'Same Card 5',
];

const cards = newCards.map(el => new Element('div', 'samecards', el).get())

const newContent = new Element('div', 'contentNew', cards);

export default newContent;