import styled from "styled-components";
import { interMedium, interSemiBold } from "../../Constants/fontStyles";

export const DeletePopUpHeading = styled.p`
    ${interSemiBold}
    text-align: center;
    font-size: 20px;
`

export const DeletePopUpSubHeading = styled.p`
    ${interMedium}
    text-align: center;
    font-size: 16px;
    color: #91919F;
`

export const DeleteButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
`

export const Button = styled.button`
    ${interSemiBold}
    display: flex;
    width: 164px;
    height: 56px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    line-height: normal;
    border: none;
    border-radius: 16px;
`;

export const NoButton = styled(Button)`
  color: var(--Violet-Violet-100, #7f3dff);
  background: #eee5ff;
`;

export const YesButton = styled(Button)`
  background: var(--Violet-Violet-100, #7f3dff);
  color: var(--Base-Light-Light-80, #fcfcfc);
`;