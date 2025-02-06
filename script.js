console.log("hello from nipun");
alert("connected");
//example 1
document.getElementById("btn").
addEventListener('click', function (){
    let para = document.getElementById("pa");
    para.textContent= "the paragraph is change";
    
});

// traversing the DOM 
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myProjects").addEventListener("click", function () {
        let subjects = document.querySelectorAll(".subject");
        subjects.forEach(subject => {
            subject.classList.add("highlight");
        });
    });
});


// example 3 
