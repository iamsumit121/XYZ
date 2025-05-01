let btn1 = document.getElementById("btn1");
       let btn2 = document.getElementById("btn2");
       let copyDiv = document.querySelector(".copyCode");
       let rgb1 = "#23be3f";
       let rgb2 = "#c657ad";

       const hexColors = () => {
        var hexCode = "0123456789abcdef";
            var colors = "#"
            for(var i = 0;i < 6; i++){
                colors = colors + hexCode[Math.floor(Math.random()*16)];
            }
            return colors;
       };

       const handlebtn1 = () => {   
        rgb1 = hexColors();
        console.log(rgb1);
        document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`;
        btn1.innerHTML = rgb1;
        copyDiv.innerHTML = `background-image: linear-gradient(to right top,${rgb1},${rgb2});`;
       };

       const handlebtn2 = () => {
        rgb2 = hexColors();
        console.log(rgb2);
        document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`;
        btn2.innerHTML = rgb2;
        copyDiv.innerHTML = `background-image: linear-gradient(to right top,${rgb1},${rgb2});`;
       }
       btn1.addEventListener("mousedown", () => {
            btn1.classList.add("btnDown");
       });

       btn1.addEventListener("mouseup", () => {
            btn1.classList.remove("btnDown");
       });

       copyDiv.addEventListener("click", () => {
        navigator.clipboard.writeText(copyDiv.innerHTML);
        alert("copied in clipboard !!");
       });

       btn1.addEventListener("click", handlebtn1);
       btn2.addEventListener("click", handlebtn2);