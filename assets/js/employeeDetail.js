// javascript function for enable edit employee form
function openEditEmployee(){
    let inputs = document.getElementsByClassName("employeeUpdate");
    let button = document.getElementById("employeeUpdateButton")
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute("disabled");
    }
    button.removeAttribute("hidden");
}   


// javascript function for view performance review form
function showReviewForm(){
    document.getElementById("review-form").style.display = "block";
}
// javascript function for close performance review form
function closeReviewForm(){
    document.getElementById("review-form").style.display = "none";
}




// javascript function for enable edit performance review form
function openEditReview(){
    let inputs = document.getElementsByClassName("review-update-input");
    let button = document.getElementById("review-update-button")
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute("disabled");
    }
    button.removeAttribute("hidden");
}   



// ajax for handling assignment performence review  
function handleAssignForm(id){
    console.log("Review",id);
    let tbody = document.getElementById("assign-body");
    tbody.innerHTML = '';
    $.ajax({
        type:'get',
        url:`/review/assign/data/${id}/`,
        success:function(data){
            data.data.datas.map((val,index)=>{
                let tr = `<tr id='${id}'>
                <td>${index}</td>
                <td>${val.name}</td>
                <td>${val.email}</td>
                <td>${val.detail.department}</td>
                <td><button class="btn btn-secondary" style="font-size: smaller;" onclick="assignEmployee('${id}','${val._id}')">Assign</button></td>
            </tr>`
            tbody.innerHTML += tr;
            })
        //    console.log(data.data.datas)
        },error: function(error){
            console.log(error.responseText);   
        }
    })
    document.getElementById("assigningReview").style.display = "block";
}
//closing assign form on click
function closeAssignForm(){
    document.getElementById("assigningReview").style.display = "none";
}
//assigning to a particular employee
function assignEmployee(id,emp){
    $.ajax({
        type:'get',
        url:`/review/assign/employee/${id}/${emp}/`,
        success:function(data){
            console.log(data);
            document.getElementById(`${id}`).innerHTML = '';
        },error: function(error){
            console.log(error.responseText);   
        }
    })
}





