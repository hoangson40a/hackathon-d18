$(document).ready(function () {
    var autoLoad= setInterval(function(){
        $('.slide-btn ul li').trigger('click');
     },6000);
    $('#play-btn').click(function () { 
        $('.youtube').addClass('active-youtube');
        $('.active-youtube-btn').addClass('active-youtube');
    });
    $('.active-youtube-btn').click(function (e) { 
        e.preventDefault()
        $('.youtube').removeClass('active-youtube');
        $('.active-youtube-btn').removeClass('active-youtube');    
    });

    $('#login').click(function (e) { 
        e.preventDefault()
        $('.login-form').addClass('active-login-form');
        $('.active-login').addClass('active-login-form');    
    });
    $('.active-login').click(function (e) { 
        e.preventDefault()
        $('.login-form').removeClass('active-login-form');
        $('.active-login').removeClass('active-login-form');    
    });
    $(window).scroll(function() {
        if ($(this).scrollTop()>500){
            $('.side-bar').show(400);
        }
        else{
            $('.side-bar').hide(400);
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop()>500){
            $('.social-btn-1').show(300);   
        }
        else{
            $('.social-btn-1').hide(300);
        }
    });
     $('.social-btn-2').click(function (e) { 
         e.preventDefault();
         $('.side-bar').hide(400);
         $(window).off('scroll');
         $('.social-btn-1').addClass('out')
         $('.social-btn-1').removeClass('in')
     });
     $('.social-btn-1').click(function (e) { 
        e.preventDefault();
        $('.side-bar').show(630);
        $('.social-btn-1').addClass('in')
        
    });

    $('.slide-btn ul li').click(function () { 
        
        clearInterval(autoLoad);
        var currentPos = $('.active-btn').index()+1;
        var clickPos = $(this).index()+1;
        $('.slide-btn ul li').removeClass('active-btn');
        $(this).addClass('active-btn');
        if( clickPos > currentPos){
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (e) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:nth-child('+clickPos+')').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai')
            });
        }
        if( clickPos < currentPos){
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
               $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            $('.slide:nth-child('+clickPos+')').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
               $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
         }
    });
    // xu ly login form
    var btn = document.getElementById("summit-login").addEventListener("click", myFun);
    function myFun () {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        
        if( username == 'admin' && password == 123456789){
            document.getElementById("login").innerHTML = 'Admin';
            $('.login-form').removeClass('active-login-form');
            $('.active-login').removeClass('active-login-form');
            $('#login').unbind('click');
            $('#login').append('<a  id="log-out" href="">LOG OUT</a>');

        }
        else if( username == 'admin' && password !== 123456789){
            document.getElementById("password-detect").innerHTML = 'Wrong PassWord, Please try again';
        }   
        else if( username != 'admin' || password === 123456789){
            document.getElementById("username-detect").innerHTML = 'Can not find out a Username';
        }
    }
    var x = document.getElementById("myAudio")
    document.getElementById('play-audio-btn').addEventListener("click", audio)
    document.getElementById('pause-audio-btn').addEventListener("click", audio2)
    function audio (){
        x.play();
    }
    function audio2(){
        x.pause();
    }
});


