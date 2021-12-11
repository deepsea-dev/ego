import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { Emph } from './Emph';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import { EgoPondersGif, EgoFlashBackGif, EgoWineEjectionGif } from "./Gif";

const mediaBreakpoint = '850px';

const egoReviewArray = `I have experienced something %s, %s from a singularly unexpected source. To say that both the meal and its maker have challenged my preconceptions about %s is a gross understatement. They have rocked me to my core. In the past, I have made no secret of my disdain for Chef Gusteau's famous motto: 'Anyone can cook.' But I realize, only now do I truly understand what he meant. %s. It is difficult to imagine more humble origins than those of the %s now cooking at Gusteau's, who is, in this critic's opinion, nothing %s than the %s chef in France. I %s to Gusteau's soon, hungry for more.`.split(/%s/g)

let words = {
  'good': [['good', 'amazing', 'excellent'],['an extra-ordinary meal', 'a tasty meal', 'a good nourisment'], ['fine-cooking', 'cooking', 'combining ingredients'], ['Not everyone can become a great artist, but a great artist can come from anywhere'], ['genius', 'excellent chef'], ['less'], ['finest'], ['will be returning']],
  'bad': [['awful', 'sickening'], ['a sloppy mess', 'a bad meal'], ['cooking', 'the worst a meal can be'], ['You should not be cooking', 'Throw away that food'], ['snail', 'awful chef'], ['more'], ['worst'], ['will not be returning']]
}


const substituteSentiment = (sentiment: 'good' | 'bad', index: number) => {
  let replacements = words[sentiment][index]
  return <Emph>
      {replacements[Math.floor(Math.random() * replacements.length)]}
  </Emph>
  
}

const getReview =  (sentiment: 'good' | 'bad') => {
  let reviewArray: any = []
  egoReviewArray.forEach((sentence, index) => {
      let sentenceArray = sentence.split('\n'); // Split sentence by newlines

      if (sentenceArray.length > 1)
          sentenceArray.forEach((value, index) => {
              if (index !== 0 && index !== sentenceArray.length - 1) reviewArray.push(<p>{value}</p>);
              else reviewArray.push(value);
              /**
               * Process multiple sentences split by the newline, can't create a new block for beginning of a pargraph. If a line doesn't abide by these conditions then we can so we wrap it in the <p> tag.
               */
          })
      else reviewArray.push(sentenceArray[0]); // Append the line if sentences don't need to be split

      if (index !== egoReviewArray.length - 1) // Don't try to do substiutions if we're on the last paragraph, the index doesn't exist.
          reviewArray.push(substituteSentiment(sentiment, index))

  })
  return <strong>{reviewArray}</strong>
};

export type ReviewProps = {
  imageUrl: string,
}

export const Review: React.FC<ReviewProps> = ({imageUrl}) => {
  const [foodClassification, setFoodClassification] = useState<null | string>(null);
  const [reviewSentiment, setReviewSentiment] = useState<'good' | 'bad'>('good');

  useEffect(() => {
    const classifyImage = async () => {
      const model = await mobilenet.load({version: 2, alpha: 0.5});
      const image = new Image();
      image.src = imageUrl!;
      const predictions = await model.classify(image);
      // !! PLEASE SET THE REVIEW SENTIMENT HERE!
      //setReviewSentiment('good');
      // !! IMPORTANT
      setFoodClassification(predictions[0].className.split(",")[0]);
    }
    if (imageUrl !== null) {
      classifyImage(); 
    }
  } ,[imageUrl]);

  const ReviewContainer = styled.div`
    width: 100%;
    display: flex;
    column-gap: 32px;
    @media (max-width: 800px) {
      flex-direction: column;
      width: 90%;
      row-gap: 32px;
    }
  `;

  const FoodImage = styled.img`
    width: 100%;
    height: auto;
  `;

  const FoodCard = styled(Card)`
    width: 50%;
    @media (max-width: 800px) {
      width: 100%;
    }
    height: fit-content;
  `

  const ReviewCard = styled(Card)`
    width: 50%;
    @media (max-width: 800px) {
      width: 100%;
    }
  `
  
  return (
    <ReviewContainer>
      <FoodCard>
        <FoodImage src={imageUrl}/>
      </FoodCard>
      <ReviewCard>
<<<<<<< HEAD
        {!foodClassification && 
        <div>
          <EgoPondersGif/>
          <p>Ego ponders...</p>
        </div>}
        {foodClassification && 
          <>
          {reviewSentiment == 'good' && <EgoFlashBackGif/>}
          {reviewSentiment == 'bad' && <EgoWineEjectionGif/>}
          <span>Looks like <Emph>{foodClassification}</Emph></span><br/><br/>
          {getReview(reviewSentiment)}
          </>
        }
      </ReviewCard> 
=======
        {getReview('bad')}
      </ReviewCard>
        
>>>>>>> fe49742 (Added synonyms)
    </ReviewContainer>
  )
}