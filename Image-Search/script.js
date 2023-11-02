// personnal acceskey from unsplash account
const accessKey="vi4Z--NytV0cLN_e_Vn-374AhqHKDtMl726526VMCpY"
// accessing the elements using it's id
const searchForm= document.getElementById("search-form")
const searchBox =document.getElementById("search-box")
const searchResult =document.getElementById("search-result")
const showMore=document.getElementById("show-more-btn")



let keyword=""
let page=1;

//creating function for image search
async function  searchImages(){
    keyword= searchBox.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=9`;
   // const url=`https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=vi4Z--NytV0cLN_e_Vn-374AhqHKDtMl726526VMCpY&per_page=9`
    const response = await fetch(url)
    const data = await response.json()

    if(page==1){
        searchResult.innerHTML=""
    }

     const results= data.results;

     results.map((result)=>{
        const image= document.createElement("img")
        image.src=result.urls.small;
        const imageLink= document.createElement("a")
        imageLink.href=result.links.html;
        imageLink.target="_blank"

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
     })
     showMore.style.display="block"
}
// calling the function on clicking search button
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showMore.addEventListener("click",()=>{
    page++
    searchImages();
})


