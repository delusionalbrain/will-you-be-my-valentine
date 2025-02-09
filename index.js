function yes(){
    window.location.href="love.html";
}


function mission(){

    let innwid=window.innerWidth;
    let inhei=window.innerHeight;

    let b = document.getElementById("ohk");
    let e = window.getComputedStyle(b).width;

    let w = document.getElementById("ohk");
    let t = window.getComputedStyle(w).height;

    if(parseInt(t)<inhei && parseInt(e) <innwid){
    let c = parseInt(e);
    e = c + 200 + "px";
    b.style.width=e;
    
    let p = parseInt(t);
    t = p + 200 + "px";
    w.style.height=t;
    }
    else {
        let y = document.getElementById("hm");
        if (y) {
            y.remove();
        }
        b.style.width = innwid + "px";
        w.style.height = inhei + "px";
    }

}