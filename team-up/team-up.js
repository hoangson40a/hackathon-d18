// $(document).ready(function () {
//     $('.char').click(function (event) { 
//         $('this').addClass('active');
//         // var a = this;
//         // console.log(a);
        
//     });
// });
// let a= document.getElementsByClassName('char');
// console.log(a)
// var elements = document.getElementsByClassName("char");

// var myFunction = function() {
//     var attribute = this.getAttribute("data-myattribute");
//     for ( var j = 0; j < elements.length; j++){
//         elements[j].classList.add('active');
//     };
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }
// $(document).ready(function () {
//     var allchar= $('.char');
//     $('.char').click(function (e) { 
//         var $active = $(this);
//         
//         var b = this.id;
//         var c = [];
        
//         $active.addClass('active');
//         c.push(b);
//         console.log(c);



//     });
// });
$(document).ready(function () {
    var c= [];
    var allchar = $('.char');
    var d = c;
        $('.active').click(function () { 
            $('.active').removeClass('active');
        
        });
        $('.char').click(function (e) {
            
            var b = this.id;
            var $active = $(this); 
            if (d.length <= 3 ){
                $active.addClass('active'); 
                c.push(b);
                return c
            }
            else{
                allchar.removeClass('active');
                var wind =[];
                var water =[];
                var electric =[];
                var fire =[];
                var earth =[];
                var ice =[];
                for(let i = 0; i< d.length; i++){
                    if(d[i]== 'venti' || d[i]== 'succu' || d[i] == 'xiao' || d[i] == 'jean'){
                        wind.push( d[i] );
                        if(wind.length >=2 ){
                            $('#combo-content').html("day la combo gio");
                        }
                    }
                    else if(d[i]== 'mona' || d[i]== 'abc' || d[i] == '3bara'){
                        water.push( d[i] );
                        if(water.length >=2 ){
                            console.log('day la combo nuoc');
                        }
                    }
                    else if(d[i]== 'lisa' || d[i]== 'razor' || d[i] == 'keqing' || d[i] == 'beidou' || d[i]=='firsh'){
                        electric.push( d[i] );
                        if(electric.length >=2 ){
                            console.log('day la com bo dien');
                        }
                    }
                    else if(d[i]== 'xialing' || d[i]== 'klee' || d[i] == 'diluc' || d[i] == 'amber' || d[i]=='bennet'){
                        fire.push( d[i] );
                        if(fire.length >=2 ){
                            console.log('day la combo lua');
                        }
                    }
                    else if(d[i]== 'nigu' || d[i]== 'noelle'){
                        earth.push( d[i] );
                        if(earth.length >=2 ){
                            console.log('day la combo nham');
                        }
                    }
                    else if(d[i]== 'chong' || d[i]== 'qiqi' || d[i] == 'kaeya'){
                        ice.push( d[i] );
                        if(ice.length >=2 ){
                            console.log('day la combo bang');
                        }
                    }
                }
                d.splice(0,4);
                
            }
                      
        })

})