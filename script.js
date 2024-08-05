var w_min=document.getElementById("w_min")
var w_sec=document.getElementById("w_sec")
var b_min=document.getElementById("b_min")
var c=document.getElementById("cycle_num")
var b_sec=document.getElementById("b_sec")
var work_min=document.getElementById("work_num")
var break_min=document.getElementById("break_num")
var work=document.querySelector(".work_content")
var br=document.querySelector(".break_content")
 console.log(br.style)
 var num1=25,num2=5;
function timer()
{
    if(w_sec.innerText != 0 )
        w_sec.innerText--;
    else if(w_sec.innerText == 0 && w_min.innerText!=0)
        {
            w_min.innerText--;
            w_sec.innerText=59
        }
        if(w_sec.innerText ==0 && w_min.innerText==0)
        {
            work.style.display="none"
            br.style.display="block"
        }
        else
        {
        work.style.display="block"
        br.style.display="none"
        }
         

        if(w_sec.innerText ==0 && w_min.innerText==0)
            {
                if(b_sec.innerText!=0)
                    b_sec.innerText--;
                else if(b_sec.innerText==0 && b_min.innerText!=0)
                    {
                        b_sec.innerText=59;
                        b_min.innerText--;
                    }
                }
                
                if(b_min.innerText==0 && b_sec.innerText==0 && w_min.innerText==0 && w_sec.innerText==0)
                    {
                        b_sec.innerText="00";
                        b_min.innerText=num2
                        w_min.innerText=num1;
                        w_sec.innerText="00";
                        c.innerText++;
                    }
}
var setTime;

function start()
{
    if(setTime === undefined)
    {
        setTime=setInterval(timer,1000)
    }
    else
    {
            alert("Timer is already running");
    }
}

function pause()
{
    clearInterval(setTime)
    setTime=undefined;
}
function reset()
{
    b_sec.innerText="00";
    b_min.innerText=num2
    w_min.innerText=num1;
    w_sec.innerText="00";
    c.innerText=0;
    work.style.display="block"
        br.style.display="none"
    pause()
}

function work_min_increment()
{
    work_min.innerText++;
}
function work_min_decrement()
{
    work_min.innerText--;
    if(work_min.innerText<0)
    {
        alert("Minutes can't be Negative");
        work_min.innerText="00";
    }
}
function break_min_increment()
{
    break_min.innerText++;
}
function break_min_decrement()
{
    break_min.innerText--;
    if(break_min.innerText<0)
    {
        alert("Minutes can't be Negative");
        break_min.innerText="00";
    }
}
function set()
{
    w_min.innerText=work_min.innerText
    num1=work_min.innerText
    b_min.innerText=break_min.innerText
    num2=break_min.innerText
    b_sec.innerText="00";
    w_sec.innerText="00";
    pause()
}