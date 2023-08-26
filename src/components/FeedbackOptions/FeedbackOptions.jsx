import { BtnWraper, ButtonStyled } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({onLeaveFeedback}, {bad, good, neutral}) =>{

        return <>
            <BtnWraper >
                <ButtonStyled  onClick={() => onLeaveFeedback('good')}>Good {good}</ButtonStyled>
                <ButtonStyled  onClick={() => onLeaveFeedback('neutral')}>Neutral {neutral}</ButtonStyled>
                <ButtonStyled  onClick={() => onLeaveFeedback('bad')}>Bad {bad}</ButtonStyled>
            </BtnWraper>
           </>

      
}