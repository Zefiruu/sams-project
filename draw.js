
    let canvas = document.querySelector(".canvas"),
        context = canvas.getContext("2d"),
        canvasPos = canvas.getBoundingClientRect(),
        dotCount = 1,
        dots = {
            1: {
                x: 0,
                y: 0
            },
            2: {
                x: 0,
                y: 0
            },
            3: {
                x: 0,
                y: 0
            },
            4: {
                x: 0,
                y: 0
            },
            5: {
                x: 0,
                y: 0
            },
            6: {
                x: 0,
                y: 0
            }
        };
        
        
        alert("Click anywhere to start")
        function draw(event){
            let dotX = event.clientX - canvasPos.left,
            dotY = event.clientY - canvasPos.top;
            
            
            if(dotCount <= 6) {
                alert("Selected position " + dotCount);
                context.fillStyle = "white";
                context.fillRect(dotX, dotY, 20, 20);
                dots[dotCount].x = dotX;
                dots[dotCount].y = dotY;
                dotCount++;
                console.log(dotCount);
            } 

            if(dotCount > 6){
                for(let i = 0; i < 1; i++) {
                   let  randomDotX = Math.floor(Math.random()*4000),
                        randomDotY = Math.floor(Math.random()*2000),
                        randomDot = { x: randomDotX,
                                      y: randomDotY };
                    half(Math.floor(Math.random()*6)+1);            
                    function half(selectedDot) {
                        let valX = (dots[selectedDot].x - randomDot.x)/2,
                            valY = (dots[selectedDot].y - randomDot.y)/2;
                        context.fillStyle = "#fff";
                        context.fillRect(randomDot.x, randomDot.y, 10, 10);
                        context.fillRect(randomDot.x + valX, randomDot.y + valY, 10, 10);
                    }
                }
            }
        }
        
        