
    let canvas = document.querySelector(".canvas"),
        context = canvas.getContext("2d"),
        canvasPos = canvas.getBoundingClientRect(),
        clicks = 4000;
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
//             },
            // 5: {
            //     x: 0,
            //     y: 0
            // },
            // 6: {
            //     x: 0,
            //     y: 0
            }
        };
        
        let  lastDot = { x: 250,
                         y:  250};
        
        alert("Click anywhere to start")
        function draw(event){
            let dotX = event.clientX - canvasPos.left,
            dotY = event.clientY - canvasPos.top;
            
            
                if(dotCount <= 4) {
                    alert("Selected position " + dotCount);
                    context.fillStyle = "red";
                    context.fillRect(dotX, dotY, 5, 5);
                    dots[dotCount].x = dotX;
                    dots[dotCount].y = dotY;
                    dotCount++;
                    console.log(dotCount);
                } 

                if(dotCount > 4){
                    for(let i = 0; i < clicks; i++) {
                        half(Math.floor(Math.random()*4)+1);            
                        function half(selectedDot) {
                            let valX = (dots[selectedDot].x - lastDot.x)/2,
                                valY = (dots[selectedDot].y - lastDot.y)/2;
                            context.fillStyle = "#fff";
                            context.fillRect(lastDot.x, lastDot.y, 1,1);
                            context.fillRect(lastDot.x + valX, lastDot.y + valY, 1, 1);
                            lastDot.x += valX;
                            lastDot.y += valY;
                    }
                }
            }
        }
        
        
