console.log("hello from nipun");
alert("connected");
//example 1
document.getElementById("btn").
addEventListener('click', function (){
    let para = document.getElementById("pa");
    para.textContent= "the paragraph is change";
    
    }
);

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
document.getElementById("master").addEventListener("click", function () {
    let holder = document.getElementById("holder");
    holder.innerHTML = "<h1>Master of the dom</h1>";
    holder.style.backgroundColor = "red";
    holder.style.color = "white";
    holder.style.padding = "10px";
});

// example 4 i am not able to do this example please consider it or do it in the future hurray! i figure it out 
document.getElementById("btn").addEventListener("click", function () {
    let newItem = document.createElement("tr");
    newItem.innerHTML = "<td>New Name</td><td>New Roll</td><td>New Score</td>";
    
    // Append to tbody instead of table directly
    document.querySelector("#table tbody").appendChild(newItem);
});


// example 5 removing the DOM element check this i can do this do in the future
document.getElementById("btn2").addEventListener("click", function () {
    let holder = document.getElementById("holder");
    holder.lastElementChild.remove();
});


// example 6
document.getElementById("btn2")
.addEventListener("dblclick", function () {
   alert("dont remove it");
});

// example 7 click on master to select
// in all where we have to select anything this type of example i cannot able to do 
// please consider it or do it in the future
document.getElementById("myprojects").addEventListener("click", function (Event) {
    console.log(Event);
    if (Event.target.tagName === "LI") {
        Event.target.classList.toggle("highlight");
        alert("you selected: "+ Event.target.textContent);
    }
});
    

// example 8
// this is not done it yet

document.getElementById("feedbackform").addEventListener("submit", function (Event) {
    alert("submitted");
    Event.preventDefault();
    let feedbackform = document.getElementById("feedbackinput");
    console.log(feedbackform.value);
    document.getElementById("feedbackdisplay").textContent = `feedback is: ${feedbackform.value}`;
    console.log(feedbackform.value);
    
});


// example 9 example of dom loading

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("DOMStatus").textContent = "DOM is ready";
});


// example 10

document.getElementById("toggleHighlight").addEventListener("click", function () {
    let descriptiontext = document.getElementById("descriptiontext");
    descriptiontext.classList.add("highlight");  
    
});


