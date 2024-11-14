import { NavigationEvents } from "../../Constants/EventHandlers";
import withAuthRedirect from "../../Constants/WithAuthRedirect";
import {
  OuterAllSetContainer,
  CombinedGifAndtextDiv,
  AllSetText,
  ContinueButtonInAllSet,
  GifWrapper,
} from "./allSetStyled";

export const GifComponent = () => {
  const gifUrl = `/gifs/finnalYouAreAllSet.gif?${new Date().getTime()}`;
  return <GifWrapper gifUrl={gifUrl} />;
};

const YouAreAllSet = () => {
  const { navigateToHome } = NavigationEvents();

  return (
    <OuterAllSetContainer>
      <CombinedGifAndtextDiv>
        <GifComponent />
        <AllSetText>You are all set</AllSetText>
      </CombinedGifAndtextDiv>
      <ContinueButtonInAllSet onClick={navigateToHome}>
        Done
      </ContinueButtonInAllSet>
    </OuterAllSetContainer>
  );
};

export default YouAreAllSet;
