export const testCodeBlockSCSS =`
..tabs-selektor-area{
    width:100%;
    
    height: 32px;
}

.tabs-selektor-area ul{
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0px;
    box-sizing: border-box;
    background-color: #ebebeb;

    li{
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 80px;
        border-radius: 8px 8px 0px 0px;
        padding: 8px 12px;
        background-color: #d0d0d0;
        margin: 0rem 0.125rem;
        user-select: none;

        &:hover{
            cursor: pointer;
            background-color: #7a7a7a;
            color:white
        }
    }
} 

code.close{
    display: none;
}

code.open{
    display: block;
}
    `