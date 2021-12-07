export function spaceShips(ships){
    const spaceshipDiv = document.createElement(`div`);

    for (let ss of ships){
        const shipContainer = document.createElement(`div`);
        shipContainer.classList.add(`ship-container-style`);
        
        const shipImage = ss.src;
        
        const ship = document.createElement(`h2`);
        ship.classList.add(`ship-style`);
        
        const captain = document.createElement(`p`);
        captain.classList.add(`captain-style`);

        const show = document.createElement(`p`);
        show.classList.add(`show-style`);

        ship.append(ss.ship);
        captain.append(ss.captain);
        show.append(ss.show);


        shipContainer.append(ship, captain, show);
        shipContainer.classList.add(shipImage);
        spaceshipDiv.append(shipContainer);
    }

    return spaceshipDiv;
}

