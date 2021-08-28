$(document).ready(function(){
    $("li").mouseenter(function(){
        $(this).css("color", "#fc6a8d");
    });
    $("li").mouseleave(function(){
        $(this).css("color", "#0000008f");
    });

    $("li").click(function(e){
        e.preventDefault();
        let clicked = $(this).attr("id");
        let classed = "."+clicked;
        
        let parent = $("#products-container").children();
       
        if (clicked == "all") {
            parent.addClass("hide");
            
            setTimeout(function () {
                parent.removeClass("hide");
               
            }, 300);
             
        }
        else{
            parent.addClass("hide");
            $(classed).removeAttr("data-aos", "flip-left");   

            setTimeout(function () {     
                $(classed).removeClass("hide");  
                $(classed).attr("data-aos", "flip-left");   
             
            }, 300);
            $(classed).removeClass('aos-animate');
            setTimeout(function() {
                $(classed).addClass('aos-animate');
            }, 400);
          

        }
        AOS.init({
            
            easing: 'ease-out'
          });
    });
    });

