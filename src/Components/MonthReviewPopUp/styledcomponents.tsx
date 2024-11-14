import styled from "styled-components";
import { interBold } from "../../Constants/fontStyles";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";

export const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
`

export const SubContainer = styled.div`
    max-width: 500px;
    background-color: white;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    width: 78%;
`

export const PopHeading = styled.h1`
    ${interBold}
`

export const ViewMore = styled(GlobalButton1)`
    width: 50%;
    align-self: center;
    padding: 0px;
    height: 40px;
    font-size: 16px;
    `


export const BudgetImage = styled.img`
    height: 300px;
    object-fit: contain;
`