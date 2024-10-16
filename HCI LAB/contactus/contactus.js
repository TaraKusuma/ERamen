function val(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let pnum = document.getElementById("pnum")
    let pref = document.getElementById("pref")
    let checkbox = document.getElementById("checkbox")


    if(name.value.length <= 6){
        alert("name too short")
    } else if (!email.value.endsWith("@gmail.com")){
        alert("please use @gmail.com")
    } else if (pnum.value.length <= 10){
        alert("phone number too short")
    } else if (pref.value.length != "shio ramen" || pref.value.length != "shoyu ramen" || pref.value.length != "tonkotsu ramen" || pref.value.length != "miso ramen" ){
        alert("please choose our ramen menu and use lowercase")
    } else if (checkbox.value != "on"){
        alert("agree with newsletter?")
    } else {
        alert("Berhasil")
    }

}