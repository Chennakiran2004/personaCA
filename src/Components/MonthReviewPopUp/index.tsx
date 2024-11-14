import { NavigationEvents } from "../../Constants/EventHandlers"
import { DeletePopUpHeading } from "../DeletePopUp/styledcomponents"
import { Overlay, SubContainer,BudgetImage, PopHeading, ViewMore } from "./styledcomponents"


interface MonthlyReviewProps{
    toggleMontlyPopUp: ()=> void
}

const MonthReviewPopUp: React.FC<MonthlyReviewProps> = ({toggleMontlyPopUp})=>{
    const {navigateToMonthlyBudget} = NavigationEvents();

    return(
        <Overlay onClick={toggleMontlyPopUp}>
            <SubContainer onClick={(e)=> e.stopPropagation()}>
                <DeletePopUpHeading>{`Check your monthly budget report`.toLocaleUpperCase()}</DeletePopUpHeading>
                <BudgetImage src = "/Images/budget.jpg"/>
                <ViewMore onClick = {navigateToMonthlyBudget}>View Now</ViewMore>
            </SubContainer>
        </Overlay>
    )
}

export default MonthReviewPopUp