// import { spell } from "./objectobject";

export function spells(grimoire) {
    const book = document.createElement(`div`);
    book.classList.add(`book`);

    for (let spell of grimoire){
        const holderDiv = document.createElement(`div`);
        holderDiv.classList.add(`holderDiv`);

        const spellName = document.createElement(`h2`);
        spellName.classList.add(`spell-name`);

        const spellSchool = document.createElement(`p`);
        spellSchool.classList.add(`spell-school`);

        const castTime = document.createElement(`p`);
        castTime.classList.add(`cast-time`);

        const range = document.createElement(`p`);
        range.classList.add(`range`);

        const duration = document.createElement(`p`);
        duration.classList.add(`duration`);

        spellName.append(`Name: ` + spell.name);
        spellSchool.append(`School: ` + spell.school);
        castTime.append(`Cast Time: ` + spell.castTime);
        range.append(`Range: ` + spell.range);
        duration.append(`Duration: ` + spell.duration);

        const componants = document.createElement(`div`);
        componants.classList.add(`componants`);

        const ul = document.createElement(`ul`);
        ul.classList.add(`ul-style`);
        const compV = document.createElement(`li`);
        compV.classList.add(`compV`);
        const compS = document.createElement(`li`);
        compS.classList.add(`compS`);
        const compM = document.createElement(`li`);
        compM.classList.add(`compM`);

        compV.textContent = `verbal: ${spell.componants.v}`;
        compS.textContent = `semantic: ${spell.componants.s}`;
        compM.textContent = `material: ${spell.componants.m}`;

        ul.appendChild(compV);
        ul.appendChild(compS);
        ul.appendChild(compM);

        componants.textContent = `Componants: `;
        componants.append(ul);

        holderDiv.append(spellName, spellSchool, castTime, range, duration, componants);

        book.append(holderDiv);
    }
    return book;
}