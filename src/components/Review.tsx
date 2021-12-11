import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

export type ReviewProps = {
  imageUrl: string,
  reviewContent: JSX.Element;
}

export const Review: React.FC<ReviewProps> = ({imageUrl, reviewContent}) => {
  const ReviewContainer = styled.div`
    width: 100%;
    display: flex;
    column-gap: 32px;
    
    @media (max-width: 500px) {
      flex-direction: column;
      width: 90%;
      row-gap: 32px;
    }
  `;

  const FoodImage = styled.img`
    width: 100%;
    height: 100%;
  `;

  const FoodCard = styled(Card)`
    width: 30%;

    @media (max-width: 500px) {
      width: 100%;
    }
  `

  const ReviewCard = styled(Card)`
    width: 70%;

    @media (max-width: 500px) {
      width: 100%;
    }
  `
  
  return (
    <ReviewContainer>
      <FoodCard>
        <FoodImage src={imageUrl}/>
      </FoodCard>
      <ReviewCard>
        {reviewContent}
      </ReviewCard>
        
    </ReviewContainer>
  )
}