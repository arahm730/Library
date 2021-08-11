let myLibrary = [];
let data = document.getElementById('table-data');
let addBookButton = document.getElementById('addBook');

function Book(author, title, pages, wasRead) {
    // constructor
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.wasRead = wasRead;
    this.info = () => {
        console.log(`You have read ${this.pages} pages of ${this.title} by ${this.author}`)
    } 
}

function addBookToLibrary(bookAuthor, bookTitle, bookPages, bookWasRead) {
    bookName = new Book(bookAuthor, bookTitle, bookPages, bookWasRead);
    myLibrary.push(bookName);
}

function displayBooks() {
    //Refreshes table
    if (document.getElementById("actualTable").rows.length > 1) {
        for (let h = 1; h < myLibrary.length; h++) {
            document.getElementsByTagName("tr")[1].remove();
        }}
    //Inserts rows and cells belonging to each row, equal to the myLibrary array
    for (let i = 0; i < myLibrary.length; i++)
    {
        let row = data.insertRow(i)
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        let cell4 = row.insertCell(3)
        let cell5 = row.insertCell(4)
        cell1.innerText = myLibrary[i]["title"]
        cell2.innerText = myLibrary[i]["author"]
        cell3.innerText = myLibrary[i]["pages"]
        // cell4.innerText = myLibrary[i]["wasRead"].toString();
        let readButton = document.createElement("button");
        readButton.innerHTML = myLibrary[i]["wasRead"].toString()
        readButton.type = "submit";
        readButton.className = "readButton btn btn-secondary";
        cell4.appendChild(readButton);
        readButton.addEventListener("click", () => {
            if (readButton.innerHTML == "Read") {
                readButton.innerHTML = "Not read";
                myLibrary[i]["wasRead"] = "Not read"
            }
            else if (readButton.innerHTML == "Not read") {
                readButton.innerHTML = "Read";
                myLibrary[i]["wasRead"] = "Read";
            }
        })
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "DELETE"
        deleteButton.type = "submit";
        deleteButton.className = "deleteBtn btn btn-danger";
        deleteButton.id = i.toString();
        cell5.appendChild(deleteButton);
        console.log(myLibrary[i]);
        //Delete button removes the row from which it belongs to as well as removes itself from the myLibrary array
        deleteButton.addEventListener("click", () => { 
            myLibrary.splice(Number(deleteButton.id), 1);
            console.log(myLibrary);
            row.remove()
        })
        
    }
}

displayBooks();

addBookButton.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    console.log(title)
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    //The values from the input fields are added to the myLibrary array
    addBookToLibrary(author, title, pages, read);
    console.log(myLibrary);
    //Refreshes the table with the new book
    displayBooks();
})
