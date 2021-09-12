    var pass = document.getElementById("pass"); 
    var copy = document.getElementById("copy");
    var len = document.getElementById("len");
    var upper = document.getElementById("upper");
    var lower = document.getElementById("lower");
    var number = document.getElementById("number");
    var symbol = document.getElementById("symbol");
    var generate = document.getElementById("generate");

    var upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerletters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_-=+";

    function getupper() {
        return upperletters[Math.floor(Math.random() * upperletters.length)];
    }

    function getlower() {
        return lowerletters[Math.floor(Math.random() * lowerletters.length)];
    }

    function getnumber() {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }

    function getsymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function generatepassword() {
        var leng = len.value;
        var password = '';

        for(let i=0; i<leng; i++) {
            var result = generatepass();
            password += result;
        }

        pass.innerText = password;
    }

    function generatepass() {
        var pwd = [];

        if(upper.checked)
        {
            pwd.push(getupper());
        }

        if(lower.checked)
        {
            pwd.push(getlower());
        }

        if(number.checked)
        {
            pwd.push(getnumber());
        }

        if(symbol.checked)
        {
            pwd.push(getsymbol());
        }

        if (pwd.length === 0) return "";

        return pwd[Math.floor(Math.random() * pwd.length)];
    }

    generate.addEventListener('click', generatepassword);