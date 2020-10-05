function ChangeColor() {
    // alert("Change Color Run Function.....")
    let text_color = document.querySelector("#in1").value
    let blackground_color = document.querySelector("#in2").value
    // alert(text_color)
    // alert(blackground_color)
    document.querySelector("h2").style.color = text_color
    document.querySelector("h2").style.backgroundColor = blackground_color
}