export const buttonSCSS=`

button{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: none;
    border: none;

    svg{
        fill: var(--input-icon-color);
    }

    &:hover{
        cursor: pointer;
    }

    &:hover{
        background-color: transparent;

        svg{
            fill: var(--input-icon-hover-color);
        }
    }
}

`