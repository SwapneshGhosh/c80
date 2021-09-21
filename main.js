name_student_array=[];

function submit(){
    var display_student_array=[];
    for (var s=1;s<=4;s++){
        var name_of_the_student=document.getElementById("name_of_the_student_"+s).value;
        console.log(name_of_the_student);
        name_student_array.push(name_of_the_student);
    }
    console.log(name_student_array);
    var lenght_array=name_student_array.lenght;
    console.log(lenght_array);
    for (var n=0;n<lenght_array;n++){
display_student_array.push("<h4>Name - "+name_student_array[n]+"</h4>");
console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_student_array.sort();
    console.log(name_student_array);
    var display_student_array_sort=[];
    var lenght_array=name_student_array.lenght;
    console.log(lenght_array);
    for (var n=0;n<lenght_array;n++){
display_student_array_sort.push("<h4>Name - "+name_student_array[n]+"</h4>");
console.log(display_student_array_sort);
    }
    console.log(display_student_array_sort);
    var remove_commas=display_student_array_sort.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
function newupdate(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+name_student_array+"</h1>";
}