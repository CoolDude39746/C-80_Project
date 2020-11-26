Student_Array=[];
function Submit() {
    Display_Student_Array=[];
    for(var J=1 ; J<=5 ; J++) {
        var Student_Name=document.getElementById("Student_"+J).value;
        console.log(Student_Name);
        Student_Array.push(Student_Name);
    }
    var Array_Length=Student_Array.length;
    console.log(Array_Length);
    for(var I=0 ; I<Array_Length ; I++) {
        Display_Student_Array.push("<h4> Name : " +Student_Array[I]+"</h4>");
        console.log(Display_Student_Array);
    }
    Display_Student_Array.push("<hr>");
    console.log(Display_Student_Array);
    document.getElementById("Dis_Com_001").innerHTML=Display_Student_Array;
    var Remove_Comma=Display_Student_Array.join("   ");
    document.getElementById("Dis_Wit_Com_001").innerHTML=Remove_Comma;
    document.getElementById("Sub_001").style.display="none";
    document.getElementById("Sor_001").style.display="inline-block";
}
function Sorting() {
    Student_Array.sort();
    console.log(Student_Array);
    var Array_Length=Student_Array.length;
    console.log(Array_Length);
    for(var I=0 ; I<Array_Length ; I++) {
        Display_Student_Array.push("<h4> Name : " +Student_Array[I]+"</h4>");
        console.log(Display_Student_Array);
    }
    Display_Student_Array.push("<hr>");
    console.log(Display_Student_Array);
    var Remove_Comma=Display_Student_Array.join("   ");
    document.getElementById("Dis_Wit_Com_001").innerHTML=Remove_Comma;
}