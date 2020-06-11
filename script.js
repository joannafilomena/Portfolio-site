console.log("Hej! Wiem, że spora część kodu mogłaby być bardziej zwięzła, ciągle jestem w trakcie szukania bardziej optymalnych rozwiązań - uczę się na własną rękę więc szukanie i próbowanie trochę zajmuje, zwłaszcza że pracuję na co dzień ;\) Mam nadzieję, że mimo to obejrzenie mojego portfolio sprawi Ci przyjemność :\) \n Hi! I know that my code can be better optimized but I\'m still searching for better sollutions. I\'m learning all by myself so the process of searching takes a lot of time ;\) I hope that despite of that you\'ll have a litte pleasure going through my portfolio :\)");

$(function () {
    $('.newbutton').click(function () {
        $('.newbody').toggleClass('body');
        $('.newbutton').toggleClass('button');
        $('.newheader').toggleClass('header');
        $('.newlinks').toggleClass('links');
        $('.newmenu').toggleClass('menu');
        $('.fullmenu').toggleClass('full');
        if($('button').hasClass('button')) {
            $('.links').slideDown(1000);
        }else{
            $('.links').slideUp();
        };
    });
});

$(function () {
    $('#about').click(function() {
        if($('nav').hasClass('links')) {
            $('.menu').slideUp(1000);
            $('.about').slideDown(1000);  
        }else{
            $('.newmenu').fadeOut(1000);
            $('.newmenu.about').fadeIn(1000);
        };
    }); 
});

$(function () {
    $('#know').click(function() {
        if($('nav').hasClass('links')) {
            $('.menu').slideUp(1000);
            $('.know').slideDown(1000);     
        }else{
            $('.newmenu').fadeOut(1000);
            $('.newmenu.know').fadeIn(1000);
        };
    }); 
});

$(function () {
    $('#project').click(function() {
        if($('nav').hasClass('links')) {
            $('.menu').slideUp(1000);
            $('.project').slideDown(1000);     
        }else{
            $('.newmenu').fadeOut(1000);
            $('.newmenu.project').fadeIn(1000);
        };
    }); 
});

input = document.querySelector("#input");
btn = document.querySelector(".enter");
text = document.querySelector("#p");
welcome = document.querySelector("#p2");
without = document.querySelector("#p3");

btn.addEventListener("click", function () {
    if (input.value !== "wpisz imię") {
        return text.innerHTML = input.value + ", " + welcome.innerHTML;
    } else {
        return text.innerHTML = without.innerHTML;
    }
});

$(function () {
    $('#contact').click(function() {
        if($('nav').hasClass('links')) {
            $('.menu').slideUp(1000);
            $('.contact').slideDown(1000);  
        }else{
            $('.newmenu').fadeOut(1000);
            $('.newmenu.contact').fadeIn(1000);
        };
    }); 
});


$('#destroy').click(function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'http://hi.kickassapp.com/kickass.js';
    document.body.appendChild(s);
});