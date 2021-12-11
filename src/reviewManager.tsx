import React from 'react';
import { Emph } from './components/Emph';

let words = {
    'good': [['an extra-ordinary meal']],
    'bad': [['ddd']]
}

const egoReviewArray = `In many ways, the work of a critic is easy. We risk very little yet enjoy a position over those who offer up their work and their selves to our judgment. We thrive on negative criticism, which is fun to write and to read. But the bitter truth we critics must face, is that in the grand scheme of things, the average piece of junk is probably more meaningful than our criticism designating it so.\n But there are times when a critic truly risks something, and that is in the discovery and defense of the new. The world is often unkind to new talent, new creations. The new needs friends.

Last night, I experienced something new, %s from a singularly unexpected source. To say that both the meal and its maker have challenged my preconceptions about fine cooking is a gross understatement. They have rocked me to my core. In the past, I have made no secret of my disdain for Chef Gusteau's famous motto: 'Anyone can cook.' But I realize, only now do I truly understand what he meant. Not everyone can become a great artist, but a great artist can come from anywhere. It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's, who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more.`.split(/%s/g)

const substituteSentiment = (sentiment: 'good' | 'bad', index: number) => {
    let replacements = words[sentiment][index]
    return <Emph>
        {replacements[Math.floor(Math.random() * replacements.length)]}
    </Emph>
    
}

const Review =  (props: { sentiment: 'good' | 'bad'; }) => {
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
            reviewArray.push(substituteSentiment(props.sentiment, index))

    })
    return <strong>{reviewArray}</strong>
};

export default Review;