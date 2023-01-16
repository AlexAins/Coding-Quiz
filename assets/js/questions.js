// Creating Array of objects containing various questions
let qArr = [
{question: "What is the correct HTML tag for creating a Hyperlink?", choices:["<a>Link</a>","<link>Link</link>","<hyper>Link</hyper>","<src>Link</src>"], answer: 0},
{question: "What does CSS stand for?", choices:["Color and Style Sheets","Creative Style Sheets","Cascading Style Sheets", "None of the Above"], answer: 2},
{question: "Which of the Following can Javascript Do?", choices:["JavaScript can react to events","JavaScript can manipulate HTML elements","JavaScript can create alerts","All of the Above"], answer: 3},
{question: "What data type holds values such as `true` and `false`?", choices:["Boolean","String","Number","Undefined"], answer: 0},
{question: "Which tag is used to make a numbered list?", choices:["<ul>","<ol>","<li>","<nl>"], answer: 1},
{question: "Which JavaScript method returns the element matching a specified ID?", choices:["getElementsByClass","getElementsById","getElementsByName","getElementById"], answer: 3},
{question: "What does HTML stand for?", choices:["Hyper Mark Language","Hyper Markup Language","Hyper Mix Language","Hypertension Language"], answer: 1},
{question: "How do you select an element with a specific class in CSS?", choices:["#","^",".","*"], answer: 2},
{question: "Which function of an Array removes the last element from the array and returns that element?", choices:["delete()","push()","pop()","remove()"], answer: 2},
{question: "Which of these is a valid way of representing a color in CSS?", choices:["Valid Color Name","RGB Values","HEX Values","All of the Above"], answer: 3},
{question: "What CSS property is used to change the background color of an element?", choices:["bgcolor","color","background-color","All of the Above"], answer: 2},
{question: "How many sizes of header are available in HTML by default?", choices:["1","3","5","6"], answer: 3},
{question: "Which of these tags don't require a closing tag?", choices:["<br>","<h1>","<p>","<div>"], answer: 0},
{question: "Which attribute is used to provide a unique name to a HTML element?", choices:["class","id","type","None of the Above"], answer: 1},
{question: "Which of the following are parts of the CSS box model?", choices:["Margins","Borders","Padding","All of the Above"], answer: 3},
{question: "How do we write a comment in JavaScript?", choices:["#","//","$$","§"], answer: 1},
{question: "Which of the following CSS properties specifies the stack order of elements?", choices:["overlap","stack","z-index","levels"], answer: 2},
{question: "How do you display data on your console?", choices:["console.log()","log.console()","console.log{}","log.console{}"], answer: 0},
{question: "Which HTML tag is used to declare internal CSS?", choices:["<style>","<link>","<script>","None of the Above"], answer: 0},
{question: "What type of language is JavaScript?", choices:["Object-Based","Object-Oriented","Procedural","None of the Above"], answer: 1},
];

// Shuffled Question array
let qArrShuffle = qArr.sort(() => Math.random() -0.5);
