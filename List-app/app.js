const getName = document.querySelector("#name");
const getCourse = document.querySelector("#course");
const getAmount = document.querySelector("#amount");
const getAdd = document.querySelector(".btn");
const getStudentList = document.querySelector("#student-list");

getAdd.addEventListener("click", function(event){
    event.preventDefault();

    if (getName.value=="" || getCourse.value=="" || getAmount.value=="" ) {
        alert("Please Fill out your full details")
    } else {
        const newRow = document.createElement('tr');

        const newName = document.createElement('td');
        newName.innerHTML = getName.value;
        newRow.appendChild(newName);

        const newCourse = document.createElement('td');
        newCourse.innerHTML = getCourse.value;
        newRow.appendChild(newCourse);

        const newAmount = document.createElement('td');
        newAmount.innerHTML = getAmount.value;
        newRow.appendChild(newAmount);

        getStudentList.appendChild(newRow);

        getName.value ="";
        getCourse.value ="";
        getAmount.value ="";

    }


})