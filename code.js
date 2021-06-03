// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;
let results = ""
function isEnding(currentPage){ 
    for(let index = 0; index < endingPages.length; index += 1){
        if(currentPage == endingPages[index]){
            return true;
        }
    }
    return false
}

// Your Code Here.
while(currentPage !== null){
    results += pages[currentPage] + "<br> <br>" 

    currentPage = prompt(`${pages[currentPage]} \nWhat page do you want to go to?`)

    if(currentPage !== null){
        currentPage = parseInt(currentPage)
    }

    //quit the while loop
    if(isEnding(currentPage) == true){
        results += pages[currentPage] + "<br> <br>"
    
        currentPage = null
        document.write(results)
    }
}

document.write("<br>The End!")