const authorElement = document.getElementById("author");
const titleElement = document.getElementById("title");
const dateElement = document.getElementById("publishDate")
const storyElement = document.getElementById("tellYourStory")
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

const database= firebase.database().ref();

function updateDB(event){
    event.preventDefault();
    const author        = authorElement.value;
    const title         = titleElement.value;
    const date          = dateElement.value;
    const story         = storyElement.value;

    authorElement.value = "";
    titleElement.value  = "";
    dateElement.value   = "";
    storyElement.value  = "";

    console.log(author + " : ", title + " : ", date + " : ", story + " : ");

    const value= {
        AUTHOR: author,
        TITLE: title,
        DATE: date,
        STORY: story,
    };
    database.push(value);
}

database.on("child_added", addMessageToBoard)
const contentContainer= document.querySelector(".blogContent")

function addContentToBlog(blogData){
    const blog= blogData.val()
    const author= blog.AUTHOR
    const title= blog.TITLE
    const date= blog.DATE
    const story= blog.STORY

    const articleElement= document.createElement("article")
    articleElement.innerText= `${author}: ${title}: ${date}: ${story}`
    contentContainer.appendChild("articleElement")
}