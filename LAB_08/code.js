var val="";
function getValue(id){
    if(id == "1")
        val += "1";
    else if(id=="2")
        val += "2";
    else if(id =="3")
        val += "3";
    else if(id=="4")
        val += "4";
    else if(id =="5")
        val += "5";
    else if(id=="6")
        val += "6";
    else if(id =="7")
        val += "7";
    else if(id=="8")
        val += "8";
    else if(id =="9")
        val += "9";
    else if(id=="0")
        val += "0";
    else if(id == "dot")
        val += ".";
    else if(id =="+")
        val += "+";
    else if(id=="-")
        val += "-";
    else if(id =="*")
        val += "*";
    else if(id=="/")
        val += "/";
    else if(id =="%")
        val += "%";
    else if(id=="log")
        val += "log(";
    else if(id =="(")
        val += "(";
    else if(id==")")
        val += ")";
    else if(id=="sqrt")
        val += "sqrt(";
    else if(id =="mod")
        val += "mod";
    else if(id=="sin")
        val += "sin(";
    else if(id =="cos")
        val += "cos(";
    else if(id=="tan")
        val += "tan(";
    else if(id == "exp") 
        val += "exp("
    else if(id =="clear")
        clear();    
    else 
        ok();
    document.getElementById("v1").value = val;
}

function clear()
{
    val = "";
    document.getElementById("v1").value = val;
}

function ok()
{
    let percent = true;
    let normal = true;
    if(document.getElementById("v1").value[0] == 's')
    {    
        if(document.getElementById("v1").value[1]=='q')
        {
            let num="";
            let i = 5;
            while(document.getElementById("v1").value[i] != ")")
            {
                num += document.getElementById("v1").value[i];
                i++;
            }
            console.log(num);
            let ans = Math.sqrt(parseFloat(num));
            console.log(ans);
            document.getElementById("v1").value = ans;
        }
        if(document.getElementById("v1").value[1]=='i')
        {
            let num="";
            let i = 4;
            while(document.getElementById("v1").value[i] != ")")
            {
                num += document.getElementById("v1").value[i];
                i++;
            }
            console.log(num);
            let ans = Math.sin(parseFloat(num));
            console.log(ans);
            document.getElementById("v1").value = ans;
        }
    }
    else if(document.getElementById("v1").value[0] == 'l')
    {
        let num="";
        let i = 4;
        while(document.getElementById("v1").value[i] != ")")
        {
            num += document.getElementById("v1").value[i];
            i++;
        }
        let ans = Math.log(parseFloat(num));
        document.getElementById("v1").value = ans;
    }
    else if(document.getElementById("v1").value[0] == 'e')
    {
        let num="";
        let i = 4;
        while(document.getElementById("v1").value[i] != ")")
        {
            num += document.getElementById("v1").value[i];
            i++;
        }
        let ans = Math.exp(parseFloat(num));
        document.getElementById("v1").value = ans;
    }
    else if(document.getElementById("v1").value[0] == "c")
    {
        let num="";
        let i = 4;
        while(document.getElementById("v1").value[i] != ")")
        {
            num += document.getElementById("v1").value[i];
            i++;
        }
        let ans = Math.cos(parseFloat(num));
        document.getElementById("v1").value = ans;
    }
    else if(document.getElementById("v1").value[0] == "t")
    {
        let num="";
        let i = 4;
        while(document.getElementById("v1").value[i] != ")")
        {
            num += document.getElementById("v1").value[i];
            i++;
        }
        let ans = Math.tan(parseFloat(num));
        document.getElementById("v1").value = ans;
    }
    else if(normal == true)
    {
        val = eval(document.getElementById("v1").value);
        document.getElementById("v1").value = val;
        normal = false;
    }
    else
    {
        let num1="";
        let i = 0;
        while(document.getElementById("v1").value[i] != "%")
        {
            num1 += document.getElementById("v1").value[i];
            i++;
        }
        let ans = (parseFloat(num1))/100;
        document.getElementById("v1").value = ans;
    }
    
    val = eval(document.getElementById("v1").value);
    document.getElementById("v1").value = val;
    // else
    // {
    //     let num1 = "";
    //     let num2 = "";
    //     let i = 0;
    //     while(document.getElementById("v1").value[i] != "m")
    //     {
    //         num1 += document.getElementById("v1").value[i];
    //         i++;
    //     }
    //     i = i + 3;
    //     while(i != len)
    //     {
    //         num2 += document.getElementById("v1").value[i];
    //         i++;
    //     }
    //     let ans = parseFloat(num1) % parseFloat(num2);
    //     console.log(ans);
    //     document.getElementById("v1").value = ans;
    // }


}
