var resimler=new Array("","url(images/1.jpg)","url(images/2.jpg)","url(images/3.jpg)","url(images/4.jpg)","url(images/5.jpg)","url(images/6.jpg)")
		var zaman;
        var linkler=new Array("","http://www.google.com","http://www.google.com","http://www.google.com","http://www.google.com","http://www.google.com","http://www.google.com",)
		function degis(x){
            clearInterval(zaman)
            for(var i=1;i<7;i++){
                    if(i==x){
                        document.getElementById("sayi"+i).style.background="#ec2502c9"
                        document.getElementById("slider").style.background=resimler[x]
                        document.getElementById("slider").setAttribute("onclick","window.location.href='"+linkler[x]+"'")
                    }
                    else{
                        document.getElementById("sayi"+i).style.background="white"
                    }
                }
         
		}

        function basla(z){
            if(z==1){
                document.getElementById("sayi"+z).style.background="#ec2502c9"
                document.getElementById("slider").style.background=resimler[z]
                document.getElementById("sayi6").style.background="white"
                z++;

            }
            zaman=window.setInterval(function(){
                
                document.getElementById("slider").style.background=resimler[z]
                document.getElementById("slider").setAttribute("onclick","window.location.href='"+linkler[z]+"'")
                for(var i=1;i<7;i++){
                    if(i==z){
                        document.getElementById("sayi"+i).style.background="#ec2502c9"
                    }
                    else{
                        document.getElementById("sayi"+i).style.background="white"
                    }
                }
                z++
                if(z==7){
                    z=1
                }
                
                
                
                
            },2000)
        }
        
        $(function(){
            $(".li").mouseover(function(){
                $(this).css("background-color", "#ec2502c9");
                $("a").css("color", "azure");
            })
        })