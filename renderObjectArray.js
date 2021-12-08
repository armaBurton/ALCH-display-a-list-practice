export function cocktails(cocktail){
    const cocktailDiv = document.createElement(`div`);
    cocktailDiv.classList.add(`cocktail-div`);

    for (let drink of cocktail){
        const cup = document.createElement(`div`);
        cup.classList.add(`cup`);

        const drinkName = document.createElement(`h2`);
        drinkName.classList.add(`drink-name`);
        drinkName.append(drink.name);

        const ingAndImg = document.createElement(`div`);
        ingAndImg.classList.add(`ing-and-image`);

        const ingList = document.createElement(`div`);
        ingList.classList.add(`ing-list`);

        const drinkImg = document.createElement(`img`);
        drinkImg.classList.add(`drink-img`);
        drinkImg.src = drink.url;
        
        for (let item of drink.ingredients){
            const ingLine = document.createElement(`p`);
            ingLine.classList.add(`ing-line`);
            ingLine.append(`🍹 ` + item);
            ingList.append(ingLine);
        }
        
        ingAndImg.append(ingList);
        ingAndImg.append(drinkImg);

        const directions = document.createElement(`div`);
        directions.classList.add(`directions`);
        let dirCounter = 1;
        for (let dir of drink.directions){
            const dirLine = document.createElement(`p`);
            dirLine.classList.add(`dir-line`);
            dirLine.append(dirCounter + '. ' + dir);
            directions.append(dirLine);
            dirCounter++;
        }

        const rating = document.createElement(`p`);
        rating.classList.add(`rating`);
        rating.append(drink.rating);

        const updated = document.createElement(`p`);
        updated.classList.add(`updated`);
        updated.append(`Last Updated: ` + drink.updated);

        cup.append(drinkName, ingAndImg, directions, rating, updated);

        cocktailDiv.append(cup);
    }
    return cocktailDiv;

}