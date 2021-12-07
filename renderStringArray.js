export function quotes(scifiQuotes) {
    const scifi = document.createElement(`div`);

    for (let sf of scifiQuotes){
        const divContainer = document.createElement(`div`);
        divContainer.classList.add(`scifi-style`);

        const blockquote = document.createElement(`blockquote`);
        
        const pAuthor = document.createElement(`p`);
        pAuthor.classList.add(`author-style`);

        const citeSource = document.createElement(`cite`);
        citeSource.classList.add(`cite-style`);

        const quoteContainer = document.createElement(`div`);
        quoteContainer.classList.add(`qc-style`);
    
        blockquote.append(sf.quote);
        blockquote.classList.add(`bq-style`);
        pAuthor.append(sf.author.concat(', '));
        citeSource.append(sf.source);
        quoteContainer.append(pAuthor, citeSource);
        divContainer.append(blockquote, quoteContainer);
        scifi.append(divContainer);
    }

    return scifi;
}