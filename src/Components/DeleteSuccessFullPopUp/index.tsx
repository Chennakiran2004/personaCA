import { Button } from '../DeletePopUp/styledcomponents';
import {SuccessPopUpContainer, SuccessGifContainer, GifWrapperDelete, DeleteSuccessPopUpHeading, OkayButton, GifImage} from './styledcomponents'


interface DeleteSuccessPopUp{
    closePopUp: ()=> void
    transactionId: number | string
}

const popUpVariants = {
    hidden: { scale: 0.8 },  // Start small
    visible: {
      scale: 1,              // Full size when visible
      transition: {
        type: "spring",
        stiffness: 300,      // The higher the stiffness, the more "springy" it will feel
        damping: 20,         // Controls how fast the spring settles (higher = less bounce)
        duration: 0.5        // Controls how long the animation lasts
      }
    },
    exit: {
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3
      }
    }
  };
  
export const GifComponent = () => {
    const gifUrl = `/gifs/finnalYouAreAllSet.gif?${new Date().getTime()}`;
    return <GifWrapperDelete gifUrl={gifUrl} />;
};

const DeleteSuccessPopUp: React.FC<DeleteSuccessPopUp> = ({closePopUp, transactionId})=>{
    // initial = "hidden" animate = "visible" exit = "exit" variants={popUpVariants}
    return(
        <SuccessPopUpContainer>
            <SuccessGifContainer>
                <GifImage src = "/gifs/deleteTransaction.gif"/>
                <DeleteSuccessPopUpHeading>
                    Transaction has been successfully removed
                </DeleteSuccessPopUpHeading>
                <OkayButton onClick = {closePopUp}>Okay</OkayButton>
            </SuccessGifContainer>
        </SuccessPopUpContainer>
    )
}

export default DeleteSuccessPopUp