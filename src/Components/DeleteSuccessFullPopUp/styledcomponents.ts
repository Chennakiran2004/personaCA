import styled from "styled-components";
import { GifWrapper } from "../YouAreAllSet/allSetStyled";
import { interMedium } from "../../Constants/fontStyles";
import { Button } from "../DeletePopUp/styledcomponents";
import {motion} from 'framer-motion'

export const SuccessPopUpContainer = styled(motion.div)` 
    position: absolute;
    top: 50%;         
    left: 50%;       
    transform: translate(-50%, -50%); 
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    width: 300px;
    max-height: auto;
    text-align: center;
`;

export const SuccessGifContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 16px;
`

export const GifWrapperDelete = styled(GifWrapper)`
    width: 150px;
    height: 80px;
`

export const DeleteSuccessPopUpHeading = styled.p`
    ${interMedium}
    font-size: 16px;
`

export const OkayButton = styled(Button)`
    width: 83px;
    height: 40px;
    border-radius: 8px;
    background-color: #5856D6;
    color: white;
`

export const GifImage = styled.img`
    width: 56px;
    height: 56px;
`