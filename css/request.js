document.getElementById("submit").addEventListener("click" ,(e) => {
    e.preventDefault();
    let title =document.getElementById("title").value;
    
    let postDescription =document.getElementById("message").value;
    let date = new Date();
    if (title.trim() === '' || postDescription.trim()=== '') {
        alert("Error")
} else{
    const requests =document.querySelector(".hr");
    newDiv =document.createElement("div");
    newDiv.innerHtml =  `<p style="margin :0;
    padding : 1%;
    background:rgba(5, 102, 141, 0.342);
    ">${title}</p>
    <p style="float :right;background-color:#A5BE00; padding: 0.4%;>${date}</p>
    <br>`
window.location.href = "/allreq.html"
}

})