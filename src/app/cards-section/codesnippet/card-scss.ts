export const  cardSCSS = `

:host{
    --background:rgb(255, 255, 255);
    --shadow-color:rgba(0, 0, 0, 0.12);
    --border-color:rgb(227, 227, 227);
}

.card-boarder{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    background-color: var(--background);
    padding: 1rem 2rem;
    border-radius:0.5rem;
    box-shadow: 1px 2px 4px var(--shadow-color);
    border: 1px solid var(--border-color);
    justify-content: center;
}

.card-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}

`