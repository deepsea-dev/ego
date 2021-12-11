import React from 'react';

let words = {
    'good': [['an extra-ordinary meal']],
    'bad': [['ddd']]
}

const egoReviewArray = `In many ways, the work of a critic is easy. We risk very little yet enjoy a position over those who offer up their work and their selves to our judgment. We thrive on negative criticism, which is fun to write and to read. But the bitter truth we critics must face, is that in the grand scheme of things, the average piece of junk is probably more meaningful than our criticism designating it so. But there are times when a critic truly risks something, and that is in the discovery and defense of the new. The world is often unkind to new talent, new creations. The new needs friends.

Last night, I experienced something new, %s from a singularly unexpected source. To say that both the meal and its maker have challenged my preconceptions about fine cooking is a gross understatement. They have rocked me to my core. In the past, I have made no secret of my disdain for Chef Gusteau's famous motto: 'Anyone can cook.' But I realize, only now do I truly understand what he meant. Not everyone can become a great artist, but a great artist can come from anywhere. It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's, who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more.`.split(/%s/g)

const substituteSentiment = (sentiment: 'good' | 'bad', index: number) => {
    let replacements = words[sentiment][index]
    console.log(replacements);
    return <span>
        {replacements[Math.floor(Math.random() * replacements.length)]}
    </span>
    
}

const Review =  (props: { sentiment: 'good' | 'bad'; }) => {
    let reviewArray = []
    console.log(egoReviewArray)
    egoReviewArray.forEach((sentence, index) => {
        reviewArray.push(sentence);
        if (index !== egoReviewArray.length - 1)
            reviewArray.push(substituteSentiment(props.sentiment, index))
    })
    
    return <strong>{egoReviewArray.join()}</strong>
};

export default Review;