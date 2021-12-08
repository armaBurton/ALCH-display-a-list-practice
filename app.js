// import functions and grab DOM elements
import { scifiQuotes } from './strings.js';
import { quotes } from './renderStringArray.js';
const scifi = document.getElementById(`scifi`);
const placer = quotes(scifiQuotes);
scifi.append(placer);

import { spaceShipsObj } from './simple-objects.js';
import { spaceShips } from './renderSimpleObjects.js';
const spaceship = document.getElementById(`spaceship`);
const spaceshipPlacer = spaceShips(spaceShipsObj);
spaceship.append(spaceshipPlacer);

import { spellArr } from './objectobject.js';
import { spells } from './renderObjectInObject.js';
const spellHolder = document.getElementById(`spells`);
const spellBook = spells(spellArr);
spellHolder.append(spellBook);

import { cocktailsArr } from './objectArray.js';
import { cocktails } from './renderObjectArray.js';
const bartender = document.getElementById(`cocktails`);
const hostess = cocktails(cocktailsArr);
bartender.append(hostess);