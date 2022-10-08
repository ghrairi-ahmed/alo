function  Fuc (str)  {
    let number = 0;
    
    for (let i = 0; i <= str.length; i++) {
       if (str.charAt(i) == " ") {
            number++;
        }


        }
        return number +  1;
    }
    

    console.log(Fuc("algorothime checkpoint number one"))