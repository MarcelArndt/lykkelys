export const inputSCSS=`:host{
    --input-border-color: #3f3f3f;
    --input-hover-color: #0ba0f0;
    --input-focus-color: #e7b009;
    --input-error-color: #e70909;

    --input-icon-color: #3f3f3f;
    --input-icon-hover-color: #0ba0f0;
}


.input-field{
    box-sizing: border-box;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    margin: 8px 0px;
    height: 32px;
    border: 1px solid var(--input-border-color);
    display: flex;  
    border-radius: 4px;
    max-width: min(92%, 450px);    
    
    &:hover {
        border-color: var(--input-hover-color);
    }

}

.input-field:has(input:focus) {
    border-color: var(--input-focus-color);
}

.input-field.error{
    border-color: var(--input-error-color);
}

input{
    box-sizing: border-box;
    padding-right: 1rem;
    border: none;
    outline: none;
    background: none;
    height: 100%;
    width: 100%;

    &:hover, &:active, &:focus  {
        outline: none;
        border: none;
    }
}

input:is(:-webkit-autofill, :autofill) {
    border: none;
    outline: none;
    background: none;
}


`