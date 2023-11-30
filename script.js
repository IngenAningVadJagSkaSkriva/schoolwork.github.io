var blocker = () => {
    window.open('window.html','','HEIGHT=1,WIDTH=1');
}
var x = 0;
var start = () => {
    if(x == 1) return 0;
    setInterval(() => {
        let w = window.open('','','HEIGHT=1,WIDTH=1');
        w.document.write("KEEP LANSCHOOL WORKER WINDOW IN SIGHT IF YOU WANT IT TO KEEP WORKING!");
        w.resizeTo(w.outerWidth * 2,window.outerHeight);
        w.moveTo(screen.width - w.outerWidth,0);
        setTimeout(() => {
            w.close();
        }, 1500);
    }, 3000);
    document.getElementById("text").innerText = "LANSCHOOL WORKER! DONT CLOSE!";
    x = 1;
}