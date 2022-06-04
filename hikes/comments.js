const hikeComments = [
    {
        name: 'Bechler Falls',
        date: '25, Jan 2020',
        content: 'This hike was super gross and dirty - just look at the pic.'
    }
];

// const newComment = {
//     name: "kjhkjh",
//     date: new Date(),
//     content: comment
// };

let commentList = [];

export default class Comments {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
        this.addComm = this.addNewComment();
    }

    //getAllComments
  
    //renderCommentList
    
    //filterCommentsByName

    addNewComment(comment) {
        let submitBtn = document.getElementsByClassName('input-button');
        submitBtn.addEventListener('touchend', e => {
        });
        let _comment = document.querySelector('.comment-input');
        console.log(_comment);
    }
}
