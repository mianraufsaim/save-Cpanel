if(window.location.href.includes("cpsess")){
    document.onkeydown = function(event) {
        if((macKeys.cmdKey || event.ctrlKey) && (event.keyCode == '83')){
            event.preventDefault();
            document.getElementById("sform_submit").click();
        }
    };
}
