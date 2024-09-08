function showDescription(descript){
    $("#description").html("Description: "+descript);
}

function hideDescription(){
    $("#description").html("");
}

function validate() {
    var txtDob = $("#birthday").val();
    var dob = new Date(txtDob);
    if(dob >= new Date()) {
        alert("Date of Birth is not valid. Date has to be before today.");
        return false;
    }
}

