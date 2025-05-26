let searchInputEl = document.getElementById("searchInput");
let searchButtonEl = document.getElementById("searchButton");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");



function createAndAppendResult(result){
    let {title, link, description} = result 
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    searchResultsEl.appendChild(resultItemEl);

    let resultTitleEl = document.createElement("a");
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent = title;
    resultTitleEl.href = link;
    resultTitleEl.target = "_blank";

    searchResultsEl.appendChild(resultTitleEl);

    let titleBreakEl = document.createElement("br");

    searchResultsEl.appendChild(titleBreakEl);

    let resultLinkEl = document.createElement("a");
    resultLinkEl.classList.add("result-url");
    resultLinkEl.textContent = link
    resultLinkEl.href = link;
    resultLinkEl.target = "_blank";

    searchResultsEl.appendChild(resultLinkEl);

    let linkBreakEl = document.createElement("br");

    searchResultsEl.appendChild(linkBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;

    searchResultsEl.appendChild(descriptionEl);
}

function displayResults(searchResults){
    spinnerEl.classList.toggle("d-none");
    for (let result of searchResults){
        createAndAppendResult(result);
    }
    
}

function searchWikipedia(){
    searchResultsEl.textContent = "";
    spinnerEl.classList.toggle("d-none");
    let inputsearch = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search="+inputsearch;
    let options ={
        method: "GET"
    }
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        let {search_results} = jsonData;
        displayResults(search_results);
    })
    
}

function entersearch(){

}


searchInputEl.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        searchWikipedia();
    }
});
searchButtonEl.addEventListener("click", searchWikipedia);

