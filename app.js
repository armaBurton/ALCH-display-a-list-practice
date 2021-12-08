// import functions and grab DOM elements
import { scifiQuotes } from './strings.js';
import { quotes } from './renderStringArray.js';

const scifi = document.getElementById(`scifi`);
const placer = quotes(scifiQuotes);
scifi.append(placer);

import { spaceShips } from './renderSimpleObjects.js';
import { spaceShipsObj } from './simple-objects.js';

const spaceship = document.getElementById(`spaceship`);
const spaceshipPlacer = spaceShips(spaceShipsObj);
spaceship.append(spaceshipPlacer);

import { spellArr } from './objectobject.js';
import { spells } from './renderObjectInObject.js';
const spellHolder = document.getElementById(`spells`);
const spellBook = spells(spellArr);
spellHolder.append(spellBook);