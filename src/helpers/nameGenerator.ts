// Simple fantasy name generation for level-zero characters
const firstNames = [
  'Aldric',
  'Beatrice',
  'Caspian',
  'Daphne',
  'Eamon',
  'Faye',
  'Gareth',
  'Hazel',
  'Iris',
  'Jasper',
  'Kara',
  'Loren',
  'Meredith',
  'Nolan',
  'Ophelia',
  'Percival',
  'Quinn',
  'Rowan',
  'Silas',
  'Thea',
  'Ulric',
  'Violet',
  'Wyatt',
  'Xander',
  'Yara',
  'Zephyr'
];

const lastNames = [
  'Ashford',
  'Blackwell',
  'Coldbrook',
  'Davenport',
  'Evercrest',
  'Fairchild',
  'Greenwood',
  'Hartwell',
  'Iverson',
  'Jameson',
  'Kinsley',
  'Lakewood',
  'Morewood',
  'Northcote',
  'Oakley',
  'Pemberley',
  'Quinton',
  'Ravenswood',
  'Sutherland',
  'Thornhill',
  'Underwood',
  'Vale',
  'Waverly',
  'Westbrook',
  'Yates',
  'Zimmerman'
];

export function generateCharacterName(): string {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}
