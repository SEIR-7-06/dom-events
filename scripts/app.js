// console.log('Hello Dave...')

const addCommentBtn = document.querySelector('button');
const commentForm = document.querySelector('form');

/*
MAIN EVENT TYPES

Window - resize, loading

Mouse - click, dblclick, mouseover

Keyboard - keypress, keydown

*/

// addEventListener takes 3 args
// 1 - Event
// 2 - Callback
// 3 - Use Capture

// Event
// document.body.addEventListener('click', function () {
//   console.log('Clicked!');
// });



// Add New Comment on Click
//  - Select the Button
//  - Add Event Listener to the Button
//  - On Click
//    - Create a new list item
//    - Add text(content)
//    - Add classname 'comment'
//    - Append it to the <ul>

// addCommentBtn.addEventListener('click', function () {
//   // Create A New List Item
//   const newComment = document.createElement('li');
//   newComment.textContent = 'You are a word smith...!';

//   // Add Class "comment"
//   // newComment.setAttribute('class', 'comment');
//   newComment.classList.add('comment');


//   // Append newComment to the <ul>
//   // Select the ul
//   const commentList = document.querySelector('.comments-list');

//   // Append the newComment(li) to commentList(ul)
//   commentList.appendChild(newComment);
// })



// Event Handler
function handleCommentSubmit(event) {
  event.preventDefault();
  // Stop form default behavior (page reload)
  // Get form values
  // Create list item
  // Add form value to list item
  // Add list item class 'comment'
  // Select the parent <ul>
  // Append the list itme to the parent ul
  const commentInput = document.getElementById('comment');
  // console.log(commentInput.textContent); // => undefined
  const commentInputVal = commentInput.value;
  const newComment = `
    <li class="comment">${commentInputVal}</li>
  `;

  document
    .querySelector('ul')
    .insertAdjacentHTML('beforeend', newComment);

  // Clear form input
  
}

commentForm.addEventListener('submit', handleCommentSubmit);
