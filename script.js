function search(){
    let a=prompt("Enter The Movie Name ");
    if (a=='Dunki'|| a=='dunki')
    window.location.href="dunki.html";
    
else
 if(a=='Animal'|| a=='animal')
    window.location.href="animal.html";

else
 if(a=='Salaar' || a=='salaar')
window.location.href="salaar.html";

else 
if(a=='Aquaman' || a=='aquaman')
    window.location.href="aquaman.html";
else 
if(a=='Babari' )
    window.location.href="babari.html";
else 
if(a=='Dhak Dhak ' )
    window.location.href="dhakdhak.html";
else 
if(a=='Fatherhood' )
    window.location.href="fatherhood.html";
else 
if(a=='Garud Puran')
    window.location.href="garudpuran.html";
else 
if(a=='Jaari')
    window.location.href="jaari.html";
else 
if(a=='Kabbadi 4')
    window.location.href="kabadi.html";
else 
if(a=='King Richard' )
    window.location.href="kingrichard.html";
else 
if(a=='Mission Raniganj' )
    window.location.href="mission.html";
else 
if(a=='Rebel Moon' )
    window.location.href="rebelmoon.html";
else 
if(a=='The Great Indian Family' )
    window.location.href="thegreat.html";
else 
if(a=='The Nun 2' )
    window.location.href="thenun.html";
    else 
    if(a=='Fukrey 3' )
        window.location.href="fukrey.html";

else
   alert('Sorry'+' Movie Named ' + a +' Doesnot Exists');
}

function rating(){
    var image= document.getElementById('myImage');
    if (image.src.match('starclose')){
        image.src="staropen.webp";
       
    }
    else{
        image.src="starclose.png"; 
        alert("Thank You For Giving 1 star Ratings ");
    }

    }
    function rating2(){
        var image= document.getElementById('myImage2');
        if (image.src.match('starclose')){
            image.src="staropen.webp";
           
        }
        else{
            image.src="starclose.png"; 
            alert("Thank You For Giving 2 star Ratings ");
        }
        
        }
        function rating3(){
            var image= document.getElementById('myImage3');
            if (image.src.match('starclose')){
                image.src="staropen.webp";
               
            }
            else{
                image.src="starclose.png"; 
                alert("Thank You For Giving 3 star Ratings ");
            }
            
            }
            function rating4(){
                var image= document.getElementById('myImage4');
                if (image.src.match('starclose')){
                    image.src="staropen.webp";
                   
                }
                else{
                    image.src="starclose.png"; 
                    alert("Thank You For Giving 4 star Ratings ");
                }
                
                }
                function rating5(){
                    var image= document.getElementById('myImage5');
                    if (image.src.match('starclose')){
                        image.src="staropen.webp";
                       
                    }
                    else{
                        image.src="starclose.png"; 
                        alert("Thank You For Giving 5 star Ratings ");
                    }
                    
                }