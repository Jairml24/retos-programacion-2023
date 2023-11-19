    let puntuacion=['love',15,30,40,'ventaja'],
    secuencia=['P1', 'P1', 'P1','P2','P2','P2','P2','P1','P2','P1','P2','P2','P2'],
    contadorP1=0,contadorP2=0;
    
    for (var i=0;i<secuencia.length;i++){  

        if(!(contadorP1>3 && contadorP2 <3))
        {
            if(!(contadorP2>3 && contadorP1 <3))
            {  
               if(!(contadorP2>4||contadorP1>4))
                {
                    secuencia[i]=='P1'?contadorP1++:contadorP2++

                    if((contadorP1>3 && contadorP2 <3) )
                    {
                        console.log('GANADOR P1')
                    } 

                    else if((contadorP2>3 && contadorP1 <3))
                    {
                        console.log('GANADOR P2')
                    }
         
                    else
                    {
                        if(contadorP1>2 && contadorP2>2 && contadorP1==contadorP2)
                        {
                            console.log('deuce')
                            contadorP1=3
                            contadorP2=3
                        }
                       
                        else if(contadorP1==4)
                        {
                            console.log(puntuacion[contadorP1]+' P1')
                        }
                        else if(contadorP2==4)
                        {
                            console.log(puntuacion[contadorP2]+' P2')
                        }
                        else if(contadorP1>4)
                        {
                            console.log('GANADOR P1')
                        }
                        else if(contadorP2>4)
                        {
                            console.log('GANADOR  P2')
                        }
                        else{
                            console.log(puntuacion[contadorP1]+'   -    '+puntuacion[contadorP2]);
                        }
                    }   
                }     
            }
        }      
    }
