        // הגדרת משתנים
        var index = 0;
        var imgElement = document.getElementById("picSolider");
        var setInterval0bj;
        var picturesArry = ["img/desktop1.jpg", "img/shimi1.png", "img/shimi2.png", "img/shimi3.png",]
        // פעולות לאחר הטעינה
        window.onload = () => {
            document.getElementById("prevBtn").addEventListener("click", changePic);
            document.getElementsByTagName("button")[1].addEventListener("click", () => changePic("+"));
            setInterval0bj = setInterval(changePic, 3000);
            document.getElementById("picSlider").addEventListener("click", () => clearInterval(setInterval0bj))
        }
        // פונקציה לשינוי התמונה
        function changePic(action) {
            if (action == "+") {
                nextPic()
            }
            else {
                previusPic()
            }
            document.getElementById("picSlider").src = picturesArry[index]
        }
        // פונקציה לקידום האינדקס
        function nextPic() {
            index++;
            if (index >= picturesArry.length) {
                index = 0;
            }
        }
        // פונקציה להפחתת אינדקס 
        function previusPic() {
            index--;
            if (index < 0) {
                index = picturesArry.length - 1;
            }
        }
        window.onunload = () => {
            alert("are you sure to Exit?")
        }