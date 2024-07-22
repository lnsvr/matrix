let diodeColor = 'orange';
let clearColor = 'white';
var errorColor = 'red';

function clear() {
	document.getElementById("1_1").style.backgroundColor = clearColor;
	document.getElementById("1_2").style.backgroundColor = clearColor;
	document.getElementById("1_3").style.backgroundColor = clearColor;
	document.getElementById("1_4").style.backgroundColor = clearColor;
	document.getElementById("1_5").style.backgroundColor = clearColor;

	document.getElementById("2_1").style.backgroundColor = clearColor;
	document.getElementById("2_2").style.backgroundColor = clearColor;
	document.getElementById("2_3").style.backgroundColor = clearColor;
	document.getElementById("2_4").style.backgroundColor = clearColor;
	document.getElementById("2_5").style.backgroundColor = clearColor;

	document.getElementById("3_1").style.backgroundColor = clearColor;
	document.getElementById("3_2").style.backgroundColor = clearColor;
	document.getElementById("3_3").style.backgroundColor = clearColor;
	document.getElementById("3_4").style.backgroundColor = clearColor;
	document.getElementById("3_5").style.backgroundColor = clearColor;

	document.getElementById("4_1").style.backgroundColor = clearColor;
	document.getElementById("4_2").style.backgroundColor = clearColor;
	document.getElementById("4_3").style.backgroundColor = clearColor;
	document.getElementById("4_4").style.backgroundColor = clearColor;
	document.getElementById("4_5").style.backgroundColor = clearColor;

	document.getElementById("5_1").style.backgroundColor = clearColor;
	document.getElementById("5_2").style.backgroundColor = clearColor;
	document.getElementById("5_3").style.backgroundColor = clearColor;
	document.getElementById("5_4").style.backgroundColor = clearColor;
	document.getElementById("5_5").style.backgroundColor = clearColor;

	document.getElementById("6_1").style.backgroundColor = clearColor;
	document.getElementById("6_2").style.backgroundColor = clearColor;
	document.getElementById("6_3").style.backgroundColor = clearColor;
	document.getElementById("6_4").style.backgroundColor = clearColor;
	document.getElementById("6_5").style.backgroundColor = clearColor;

	document.getElementById("7_1").style.backgroundColor = clearColor;
	document.getElementById("7_2").style.backgroundColor = clearColor;
	document.getElementById("7_3").style.backgroundColor = clearColor;
	document.getElementById("7_4").style.backgroundColor = clearColor;
	document.getElementById("7_5").style.backgroundColor = clearColor;

}


// $('#add').click(function(){
//     let message = $('#message').val();
//     console.log(message);
//     let i = 0;
//     let timerID = setInterval(function(){
//         if(i<message.length){

//             switch(message[i]){
    clear();
    add.onclick = function () {
        var str = inp.value.toLowerCase();;
        inp.value = '';
        var i = 0;
        var timerId = setInterval(function () {
            if (i < str.length) {
                switch (str[i]) {
                case 'a':
                    clear();
                    $('#diode6_2').css('backgroundColor', diodeColor);
                    $('#diode5_2').css('backgroundColor', diodeColor);
                    $('#diode4_2').css('backgroundColor', diodeColor);
                    $('#diode3_2').css('backgroundColor', diodeColor);
                    $('#diode2_3').css('backgroundColor', diodeColor);
                    $('#diode3_4').css('backgroundColor', diodeColor);
                    $('#diode4_3').css('backgroundColor', diodeColor);
                    $('#diode4_4').css('backgroundColor', diodeColor);
                    $('#diode5_4').css('backgroundColor', diodeColor);
                    $('#diode6_4').css('backgroundColor', diodeColor);
                   break;
                   case 'b':
                    clear();
                   $('#diode2_2').css('backgroundColor', diodeColor);
                    $('#diode3_2').css('backgroundColor', diodeColor);
                    $('#diode4_2').css('backgroundColor', diodeColor);
                    $('#diode5_2').css('backgroundColor', diodeColor);
                    $('#diode6_2').css('backgroundColor', diodeColor);
                    $('#diode6_3').css('backgroundColor', diodeColor);
                    $('#diode6_4').css('backgroundColor', diodeColor);
                    $('#diode5_4').css('backgroundColor', diodeColor);
                    $('#diode4_4').css('backgroundColor', diodeColor);
                    $('#diode4_3').css('backgroundColor', diodeColor);
                    break;
                    case 'c':
                        clear();
                    $('#diode2_2').css('backgroundColor', diodeColor);
                    $('#diode2_3').css('backgroundColor', diodeColor);
                    $('#diode2_4').css('backgroundColor', diodeColor);
                    $('#diode6_4').css('backgroundColor', diodeColor);
                    $('#diode3_2').css('backgroundColor', diodeColor);
                    $('#diode4_2').css('backgroundColor', diodeColor);
                    $('#diode5_2').css('backgroundColor', diodeColor);
                    $('#diode6_2').css('backgroundColor', diodeColor);
                    $('#diode6_3').css('backgroundColor', diodeColor);
                    break;
                    case 'd':
                        clear();
                    $('#diode2_4').css('backgroundColor', diodeColor);
                    $('#diode3_4').css('backgroundColor', diodeColor);
                    $('#diode4_4').css('backgroundColor', diodeColor);
                    $('#diode5_4').css('backgroundColor', diodeColor);
                    $('#diode6_4').css('backgroundColor', diodeColor);
                    $('#diode6_3').css('backgroundColor', diodeColor);
                    $('#diode6_2').css('backgroundColor', diodeColor);
                    $('#diode5_2').css('backgroundColor', diodeColor);
                    $('#diode4_2').css('backgroundColor', diodeColor);
                    $('#diode4_3').css('backgroundColor', diodeColor);
                    break;
                    case 'e':
                        clear();
                        $('#diode2_2').css('backgroundColor', diodeColor);
                        $('#diode2_3').css('backgroundColor', diodeColor);
                        $('#diode2_4').css('backgroundColor', diodeColor);
                        
                        $('#diode4_4').css('backgroundColor', diodeColor);
                        $('#diode4_3').css('backgroundColor', diodeColor);
                        $('#diode4_2').css('backgroundColor', diodeColor);
                        $('#diode3_2').css('backgroundColor', diodeColor);
                        $('#diode5_2').css('backgroundColor', diodeColor); 
                        $('#diode6_2').css('backgroundColor', diodeColor);
                        $('#diode6_3').css('backgroundColor', diodeColor);
                        $('#diode6_4').css('backgroundColor', diodeColor);
                        break;
                        case 'f':
                            clear();
                            $('#diode2_2').css('backgroundColor', diodeColor);
                            $('#diode2_3').css('backgroundColor', diodeColor);
                            $('#diode2_4').css('backgroundColor', diodeColor);
                            $('#diode2_2').css('backgroundColor', diodeColor);
                            $('#diode3_2').css('backgroundColor', diodeColor);
                            $('#diode4_2').css('backgroundColor', diodeColor);
                            $('#diode5_2').css('backgroundColor', diodeColor);
                            $('#diode6_2').css('backgroundColor', diodeColor);
                            $('#diode4_3').css('backgroundColor', diodeColor);
                            $('#diode4_4').css('backgroundColor', diodeColor);
                            break;
                            case 'g':
                                clear();
                            $('#diode2_2').css('backgroundColor', diodeColor);
                            $('#diode2_3').css('backgroundColor', diodeColor);
                            $('#diode2_4').css('backgroundColor', diodeColor);
                            $('#diode3_4').css('backgroundColor', diodeColor);
                            $('#diode4_4').css('backgroundColor', diodeColor);
                            $('#diode5_4').css('backgroundColor', diodeColor);
                            $('#diode6_4').css('backgroundColor', diodeColor);
                            $('#diode6_3').css('backgroundColor', diodeColor);
                            $('#diode6_2').css('backgroundColor', diodeColor);
                            $('#diode3_2').css('backgroundColor', diodeColor);
                            $('#diode4_3').css('backgroundColor', diodeColor);
                            $('#diode4_2').css('backgroundColor', diodeColor);
                            break;
                            case 'h':
                                clear();
                                $('#diode2_2').css('backgroundColor', diodeColor);
                                $('#diode3_2').css('backgroundColor', diodeColor);
                                $('#diode4_2').css('backgroundColor', diodeColor);
                                $('#diode5_2').css('backgroundColor', diodeColor);
                                $('#diode6_2').css('backgroundColor', diodeColor);
                                $('#diode4_3').css('backgroundColor', diodeColor);
                                $('#diode5_4').css('backgroundColor', diodeColor);
                                $('#diode6_4').css('backgroundColor', diodeColor);
                                $('#diode4_4').css('backgroundColor', diodeColor);
                                break;
                                case 'i':
                                    clear();
                                    $('#diode2_2').css('backgroundColor', diodeColor);
                                    $('#diode2_3').css('backgroundColor', diodeColor);
                                    $('#diode2_4').css('backgroundColor', diodeColor);
                                    $('#diode3_3').css('backgroundColor', diodeColor);
                                    $('#diode4_3').css('backgroundColor', diodeColor);
                                    $('#diode5_3').css('backgroundColor', diodeColor);
                                    $('#diode6_3').css('backgroundColor', diodeColor);
                                    $('#diode6_4').css('backgroundColor', diodeColor);
                                    $('#diode6_2').css('backgroundColor', diodeColor);
                                    break;
                                    case 'j':
                                        clear();
                                    $('#diode2_3').css('backgroundColor', diodeColor);
                                  
                                    $('#diode4_3').css('backgroundColor', diodeColor);
                                    $('#diode5_3').css('backgroundColor', diodeColor);
                                   
                                    $('#diode6_2').css('backgroundColor', diodeColor);
                                    break;
                                    case 'k':
                                        clear();
                                    $('#diode2_2').css('backgroundColor', diodeColor);
                                    $('#diode3_2').css('backgroundColor', diodeColor);
                                    $('#diode4_2').css('backgroundColor', diodeColor);
                                    $('#diode5_2').css('backgroundColor', diodeColor);
                                    $('#diode6_2').css('backgroundColor', diodeColor);
                                    $('#diode4_3').css('backgroundColor', diodeColor);
                                    $('#diode3_4').css('backgroundColor', diodeColor);
                                    $('#diode5_4').css('backgroundColor', diodeColor);
                                    $('#diode6_5').css('backgroundColor', diodeColor);
                                    $('#diode2_5').css('backgroundColor', diodeColor);
                                    break;
                                    case 'а':
                                        clear();
                                        $('#diode6_2').css('backgroundColor', diodeColor);
                    $('#diode5_2').css('backgroundColor', diodeColor);
                    $('#diode4_2').css('backgroundColor', diodeColor);
                    $('#diode3_2').css('backgroundColor', diodeColor);
                    $('#diode2_3').css('backgroundColor', diodeColor);
                    $('#diode3_4').css('backgroundColor', diodeColor);
                    $('#diode4_3').css('backgroundColor', diodeColor);
                    $('#diode4_4').css('backgroundColor', diodeColor);
                    $('#diode5_4').css('backgroundColor', diodeColor);
                    $('#diode6_4').css('backgroundColor', diodeColor);
                    break;
                    case 'б':
                        clear();
                        $('#diode6_2').css('backgroundColor', diodeColor);
                        $('#diode5_2').css('backgroundColor', diodeColor);
                        $('#diode4_2').css('backgroundColor', diodeColor);
                        $('#diode3_2').css('backgroundColor', diodeColor);
                        $('#diode2_2').css('backgroundColor', diodeColor);
                        $('#diode2_3').css('backgroundColor', diodeColor);
                        $('#diode2_4').css('backgroundColor', diodeColor);
                        $('#diode6_3').css('backgroundColor', diodeColor);
                        $('#diode6_4').css('backgroundColor', diodeColor);
                        $('#diode5_4').css('backgroundColor', diodeColor);
                        $('#diode4_4').css('backgroundColor', diodeColor);
                        $('#diode4_3').css('backgroundColor', diodeColor);
                        break;
                        case 'г':
                            clear();
                            $('#diode6_2').css('backgroundColor', diodeColor);
                            $('#diode5_2').css('backgroundColor', diodeColor);
                        $('#diode4_2').css('backgroundColor', diodeColor);
                        $('#diode3_2').css('backgroundColor', diodeColor);
                        $('#diode2_2').css('backgroundColor', diodeColor);
                        $('#diode2_3').css('backgroundColor', diodeColor);
                        $('#diode2_4').css('backgroundColor', diodeColor);
                        break;
                        case 'д':
                            clear();
                            $('#diode2_3').css('backgroundColor', diodeColor);
                            $('#diode3_2').css('backgroundColor', diodeColor);
                            $('#diode3_4').css('backgroundColor', diodeColor);
                            $('#diode4_2').css('backgroundColor', diodeColor);
                            $('#diode4_4').css('backgroundColor', diodeColor);
                            $('#diode5_2').css('backgroundColor', diodeColor);
                            $('#diode5_3').css('backgroundColor', diodeColor);
                            $('#diode5_4').css('backgroundColor', diodeColor);
                            $('#diode6_1').css('backgroundColor', diodeColor);
                            $('#diode6_5').css('backgroundColor', diodeColor);
                            $('#diode7_1').css('backgroundColor', diodeColor);
                            $('#diode7_5').css('backgroundColor', diodeColor);
                            break;
                            case 'е':
                                clear();
                                $('#diode2_2').css('backgroundColor', diodeColor);
                        $('#diode2_3').css('backgroundColor', diodeColor);
                        $('#diode2_4').css('backgroundColor', diodeColor);
                        $('#diode4_4').css('backgroundColor', diodeColor);
                        $('#diode4_3').css('backgroundColor', diodeColor);
                        $('#diode4_2').css('backgroundColor', diodeColor);
                        $('#diode3_2').css('backgroundColor', diodeColor);
                        $('#diode5_2').css('backgroundColor', diodeColor); 
                        $('#diode6_2').css('backgroundColor', diodeColor);
                        $('#diode6_3').css('backgroundColor', diodeColor);
                        $('#diode6_4').css('backgroundColor', diodeColor);
                        break;
                        case 'є':
                            clear();
                            $('#diode2_3').css('backgroundColor', diodeColor);
                            $('#diode2_4').css('backgroundColor', diodeColor);
                            $('#diode4_4').css('backgroundColor', diodeColor);
                            $('#diode4_3').css('backgroundColor', diodeColor);
                            $('#diode4_2').css('backgroundColor', diodeColor);
                            $('#diode3_2').css('backgroundColor', diodeColor);
                            $('#diode5_2').css('backgroundColor', diodeColor); 
                            $('#diode6_3').css('backgroundColor', diodeColor);
                            $('#diode6_4').css('backgroundColor', diodeColor);
                            break;
                            case 'ж':
                                clear();
                                $('#diode4_3').css('backgroundColor', diodeColor);
                                break;
                                case 'з':
                                    clear();
                                    $('#diode2_2').css('backgroundColor', diodeColor);
                                    $('#diode2_3').css('backgroundColor', diodeColor);
                                    $('#diode2_4').css('backgroundColor', diodeColor);
                                    $('#diode3_4').css('backgroundColor', diodeColor);
                                    $('#diode4_3').css('backgroundColor', diodeColor);
                                    $('#diode4_2').css('backgroundColor', diodeColor);
                                    $('#diode4_4').css('backgroundColor', diodeColor);
                                    $('#diode5_4').css('backgroundColor', diodeColor);
                                    $('#diode6_4').css('backgroundColor', diodeColor);
                                    $('#diode6_3').css('backgroundColor', diodeColor);
                                    $('#diode6_2').css('backgroundColor', diodeColor);
                                    break;
                                    case 'и':
                                        clear();
                                        $('#diode4_2').css('backgroundColor', diodeColor);
                                        $('#diode5_2').css('backgroundColor', diodeColor);
                                        $('#diode6_2').css('backgroundColor', diodeColor);
                                        $('#diode5_3').css('backgroundColor', diodeColor);
                                        $('#diode3_2').css('backgroundColor', diodeColor);
                                        $('#diode4_4').css('backgroundColor', diodeColor);
                                        $('#diode3_5').css('backgroundColor', diodeColor);
                                        $('#diode4_5').css('backgroundColor', diodeColor);
                                        $('#diode5_5').css('backgroundColor', diodeColor);
                                        $('#diode6_5').css('backgroundColor', diodeColor);
                                        break;
                                        case 'і':
                                            clear();
                                            $('#diode2_3').css('backgroundColor', diodeColor);
                                            $('#diode4_3').css('backgroundColor', diodeColor);
                                            $('#diode5_3').css('backgroundColor', diodeColor);
                                            $('#diode6_3').css('backgroundColor', diodeColor);
                                            break;
                                            case 'ї':
                                                clear();
                                                $('#diode2_2').css('backgroundColor', diodeColor);
                                                $('#diode2_4').css('backgroundColor', diodeColor);
                                                $('#diode4_3').css('backgroundColor', diodeColor);
                                            $('#diode5_3').css('backgroundColor', diodeColor);
                                            $('#diode6_3').css('backgroundColor', diodeColor);
                                            break;
                                            case 'й':
                                                clear();
                                                $('#diode4_2').css('backgroundColor', diodeColor);
                                                $('#diode5_2').css('backgroundColor', diodeColor);
                                                $('#diode6_2').css('backgroundColor', diodeColor);
                                                $('#diode5_3').css('backgroundColor', diodeColor);
                                                $('#diode3_2').css('backgroundColor', diodeColor);
                                                $('#diode4_4').css('backgroundColor', diodeColor);
                                                $('#diode3_5').css('backgroundColor', diodeColor);
                                                $('#diode4_5').css('backgroundColor', diodeColor);
                                                $('#diode5_5').css('backgroundColor', diodeColor);
                                                $('#diode6_5').css('backgroundColor', diodeColor);
                                                $('#diode1_3').css('backgroundColor', diodeColor);
                                                $('#diode1_4').css('backgroundColor', diodeColor);
                                                break;
                                                case 'к':
                                                    clear();
                                                    $('#diode2_2').css('backgroundColor', diodeColor);
                                                    $('#diode3_2').css('backgroundColor', diodeColor);
                                                    $('#diode4_2').css('backgroundColor', diodeColor);
                                                    $('#diode5_2').css('backgroundColor', diodeColor);
                                                    $('#diode6_2').css('backgroundColor', diodeColor);
                                                    $('#diode4_3').css('backgroundColor', diodeColor);
                                                    $('#diode3_4').css('backgroundColor', diodeColor);
                                                    $('#diode5_4').css('backgroundColor', diodeColor);
                                                    $('#diode6_5').css('backgroundColor', diodeColor);
                                                    $('#diode2_5').css('backgroundColor', diodeColor);
                                                    break;
                                                    case 'л':
                                                        clear();
                                                        $('#diode3_4').css('backgroundColor', diodeColor);
                                                        $('#diode4_4').css('backgroundColor', diodeColor);
                                                        $('#diode5_4').css('backgroundColor', diodeColor);
                                                        $('#diode6_4').css('backgroundColor', diodeColor);
                                                        $('#diode3_3').css('backgroundColor', diodeColor);
                                                        $('#diode3_2').css('backgroundColor', diodeColor);
                                                        $('#diode4_2').css('backgroundColor', diodeColor);
                                                        $('#diode5_2').css('backgroundColor', diodeColor);
                                                        $('#diode6_2').css('backgroundColor', diodeColor);
                                                        $('#diode6_1').css('backgroundColor', diodeColor);
                                                        break;
                                                        case 'м':
                                                            clear();
                                                            $('#diode2_1').css('backgroundColor', diodeColor);
                                                            $('#diode3_1').css('backgroundColor', diodeColor);
                                                            $('#diode4_1').css('backgroundColor', diodeColor);
                                                            $('#diode5_1').css('backgroundColor', diodeColor);
                                                            $('#diode6_1').css('backgroundColor', diodeColor);
                                                            $('#diode3_2').css('backgroundColor', diodeColor);
                                                            $('#diode4_3').css('backgroundColor', diodeColor);
                                                            $('#diode3_4').css('backgroundColor', diodeColor);
                                                            $('#diode2_5').css('backgroundColor', diodeColor);
                                                            $('#diode3_5').css('backgroundColor', diodeColor);
                                                            $('#diode4_5').css('backgroundColor', diodeColor);
                                                            $('#diode5_5').css('backgroundColor', diodeColor);
                                                            $('#diode6_5').css('backgroundColor', diodeColor);
                                                            break;
                                                            case 'н':
                                                                clear();
                                                                $('#diode2_2').css('backgroundColor', diodeColor);
                                $('#diode3_2').css('backgroundColor', diodeColor);
                                $('#diode4_2').css('backgroundColor', diodeColor);
                                $('#diode5_2').css('backgroundColor', diodeColor);
                                $('#diode6_2').css('backgroundColor', diodeColor);
                                $('#diode4_3').css('backgroundColor', diodeColor);
                                $('#diode5_4').css('backgroundColor', diodeColor);
                                $('#diode6_4').css('backgroundColor', diodeColor);
                                $('#diode4_4').css('backgroundColor', diodeColor);
                                $('#diode2_4').css('backgroundColor', diodeColor);
                                $('#diode3_4').css('backgroundColor', diodeColor);
                                break;
                                case 'о':
                                    clear();
                                    $('#diode2_2').css('backgroundColor', diodeColor);
                                    $('#diode2_3').css('backgroundColor', diodeColor);
                                    $('#diode3_1').css('backgroundColor', diodeColor);
                                    $('#diode4_1').css('backgroundColor', diodeColor);
                                    $('#diode5_1').css('backgroundColor', diodeColor);
                                    $('#diode3_4').css('backgroundColor', diodeColor);
                                    $('#diode4_4').css('backgroundColor', diodeColor);
                                    $('#diode5_4').css('backgroundColor', diodeColor);
                                    $('#diode6_2').css('backgroundColor', diodeColor);
                                    $('#diode6_3').css('backgroundColor', diodeColor);
                                    break;
                                    case 'п':
                                        clear();
                                        $('#diode3_4').css('backgroundColor', diodeColor);
                                        $('#diode4_4').css('backgroundColor', diodeColor);
                                        $('#diode5_4').css('backgroundColor', diodeColor);
                                        $('#diode6_4').css('backgroundColor', diodeColor);
                                        $('#diode3_3').css('backgroundColor', diodeColor);
                                        $('#diode3_2').css('backgroundColor', diodeColor);
                                        $('#diode4_2').css('backgroundColor', diodeColor);
                                        $('#diode5_2').css('backgroundColor', diodeColor);
                                        $('#diode6_2').css('backgroundColor', diodeColor);
                                        break;
                                        case 'р':
                                            clear();
                                            $('#diode6_2').css('backgroundColor', diodeColor);
                                            $('#diode5_2').css('backgroundColor', diodeColor);
                                        $('#diode4_2').css('backgroundColor', diodeColor);
                                        $('#diode3_2').css('backgroundColor', diodeColor);
                                        $('#diode2_2').css('backgroundColor', diodeColor);
                                        $('#diode2_3').css('backgroundColor', diodeColor);
                                        $('#diode2_4').css('backgroundColor', diodeColor);
                                        $('#diode3_4').css('backgroundColor', diodeColor);
                                        $('#diode4_4').css('backgroundColor', diodeColor);
                                        $('#diode4_3').css('backgroundColor', diodeColor);  
                                         break;
                                         case 'с':
                                            clear();
                                            $('#diode2_2').css('backgroundColor', diodeColor);
                    $('#diode2_3').css('backgroundColor', diodeColor);
                    $('#diode2_4').css('backgroundColor', diodeColor);
                    $('#diode6_4').css('backgroundColor', diodeColor);
                    $('#diode3_2').css('backgroundColor', diodeColor);
                    $('#diode4_2').css('backgroundColor', diodeColor);
                    $('#diode5_2').css('backgroundColor', diodeColor);
                    $('#diode6_2').css('backgroundColor', diodeColor);
                    $('#diode6_3').css('backgroundColor', diodeColor);
                    break;
                    case 'т':
                        clear();
                        $('#diode2_2').css('backgroundColor', diodeColor);
                    $('#diode2_3').css('backgroundColor', diodeColor);
                    $('#diode2_4').css('backgroundColor', diodeColor);
                    $('#diode3_3').css('backgroundColor', diodeColor);
                    $('#diode4_3').css('backgroundColor', diodeColor);
                    $('#diode5_3').css('backgroundColor', diodeColor);
                    $('#diode6_3').css('backgroundColor', diodeColor);
                    break;
                    case 'у':
                        clear();
                        $('#diode2_2').css('backgroundColor', diodeColor);
                        $('#diode3_2').css('backgroundColor', diodeColor);
                        $('#diode4_3').css('backgroundColor', diodeColor);
                        $('#diode2_4').css('backgroundColor', diodeColor);
                        $('#diode3_4').css('backgroundColor', diodeColor);
                        $('#diode5_3').css('backgroundColor', diodeColor);
                        $('#diode6_2').css('backgroundColor', diodeColor);
                        break;
                        case 'ф':
                            clear();
                            $('#diode2_3').css('backgroundColor', diodeColor);
                            $('#diode3_3').css('backgroundColor', diodeColor);
                            $('#diode4_3').css('backgroundColor', diodeColor);
                            $('#diode5_3').css('backgroundColor', diodeColor);
                            $('#diode6_3').css('backgroundColor', diodeColor);
                            $('#diode3_2').css('backgroundColor', diodeColor);
                            $('#diode3_1').css('backgroundColor', diodeColor);
                            $('#diode4_1').css('backgroundColor', diodeColor);
                            $('#diode5_1').css('backgroundColor', diodeColor);
                            $('#diode5_2').css('backgroundColor', diodeColor);
                            $('#diode3_4').css('backgroundColor', diodeColor);
                            $('#diode3_5').css('backgroundColor', diodeColor);
                            $('#diode4_5').css('backgroundColor', diodeColor);
                            $('#diode5_5').css('backgroundColor', diodeColor);
                            $('#diode5_4').css('backgroundColor', diodeColor);
                            break;
                            case 'х':
                                clear();
                                $('#diode4_3').css('backgroundColor', diodeColor);
                                $('#diode3_2').css('backgroundColor', diodeColor);
                                $('#diode2_1').css('backgroundColor', diodeColor);
                                $('#diode5_2').css('backgroundColor', diodeColor);
                                $('#diode6_1').css('backgroundColor', diodeColor);
                                $('#diode3_4').css('backgroundColor', diodeColor);
                                $('#diode2_5').css('backgroundColor', diodeColor);
                                $('#diode5_4').css('backgroundColor', diodeColor);
                                $('#diode6_5').css('backgroundColor', diodeColor);
                                break;
                                case 'ц':
                                    clear();
                                    $('#diode2_2').css('backgroundColor', diodeColor);
                                    $('#diode3_2').css('backgroundColor', diodeColor);
                                    $('#diode4_2').css('backgroundColor', diodeColor);
                                    $('#diode5_2').css('backgroundColor', diodeColor);
                                    $('#diode2_4').css('backgroundColor', diodeColor);
                                    $('#diode3_4').css('backgroundColor', diodeColor);
                                    $('#diode4_4').css('backgroundColor', diodeColor);
                                    $('#diode5_4').css('backgroundColor', diodeColor);
                                    $('#diode5_3').css('backgroundColor', diodeColor);
                                    $('#diode5_5').css('backgroundColor', diodeColor);
                                    $('#diode6_5').css('backgroundColor', diodeColor);
                                    break;
                                    case 'ч':
                                        clear();
                                        $('#diode2_4').css('backgroundColor', diodeColor);
                                        $('#diode3_4').css('backgroundColor', diodeColor);
                                        $('#diode4_4').css('backgroundColor', diodeColor);
                                        $('#diode5_4').css('backgroundColor', diodeColor);
                                        $('#diode6_4').css('backgroundColor', diodeColor);
                                        $('#diode2_2').css('backgroundColor', diodeColor);
                                        $('#diode3_2').css('backgroundColor', diodeColor);
                                        $('#diode4_2').css('backgroundColor', diodeColor);
                                        $('#diode4_3').css('backgroundColor', diodeColor);
                                        break;
                                        case 'ш':
                                            clear();
                                            $('#diode2_1').css('backgroundColor', diodeColor);
                                            $('#diode3_1').css('backgroundColor', diodeColor);
                                            $('#diode4_1').css('backgroundColor', diodeColor);
                                            $('#diode5_1').css('backgroundColor', diodeColor);
                                            $('#diode6_1').css('backgroundColor', diodeColor);
                                            $('#diode3_3').css('backgroundColor', diodeColor);
                                            $('#diode4_3').css('backgroundColor', diodeColor);
                                            $('#diode5_3').css('backgroundColor', diodeColor);
                                            $('#diode6_3').css('backgroundColor', diodeColor);
                                            $('#diode2_5').css('backgroundColor', diodeColor);
                                            $('#diode3_5').css('backgroundColor', diodeColor);
                                            $('#diode4_5').css('backgroundColor', diodeColor);
                                            $('#diode5_5').css('backgroundColor', diodeColor);
                                            $('#diode6_5').css('backgroundColor', diodeColor);
                                            $('#diode6_2').css('backgroundColor', diodeColor);
                                            $('#diode6_4').css('backgroundColor', diodeColor);
                                            break;
                                            case 'щ':
                                                clear();
                                                $('#diode2_1').css('backgroundColor', diodeColor);
                                                $('#diode3_1').css('backgroundColor', diodeColor);
                                                $('#diode4_1').css('backgroundColor', diodeColor);
                                                $('#diode5_1').css('backgroundColor', diodeColor);
                                                $('#diode6_1').css('backgroundColor', diodeColor);
                                                $('#diode3_3').css('backgroundColor', diodeColor);
                                                $('#diode4_3').css('backgroundColor', diodeColor);
                                                $('#diode5_3').css('backgroundColor', diodeColor);
                                                $('#diode6_3').css('backgroundColor', diodeColor);
                                                $('#diode2_5').css('backgroundColor', diodeColor);
                                                $('#diode3_5').css('backgroundColor', diodeColor);
                                                $('#diode4_5').css('backgroundColor', diodeColor);
                                                $('#diode5_5').css('backgroundColor', diodeColor);
                                                $('#diode6_5').css('backgroundColor', diodeColor);
                                                $('#diode6_2').css('backgroundColor', diodeColor);
                                                $('#diode6_4').css('backgroundColor', diodeColor);
                                                $('#diode7_5').css('backgroundColor', diodeColor);
                                                break;
                                                case 'ь':
                                                    clear();
                                                    $('#diode2_2').css('backgroundColor', diodeColor);
                                                    $('#diode3_2').css('backgroundColor', diodeColor);
                                                    $('#diode4_2').css('backgroundColor', diodeColor);
                                                    $('#diode5_2').css('backgroundColor', diodeColor);
                                                    $('#diode6_2').css('backgroundColor', diodeColor);
                                                    $('#diode4_3').css('backgroundColor', diodeColor);
                                                    $('#diode4_4').css('backgroundColor', diodeColor);
                                                    $('#diode5_4').css('backgroundColor', diodeColor);
                                                    $('#diode6_4').css('backgroundColor', diodeColor);
                                                    $('#diode6_3').css('backgroundColor', diodeColor);
                                                    break;
                                                    case 'ю':
                                                        clear();
                                                        $('#diode2_1').css('backgroundColor', diodeColor);
                                                        $('#diode3_1').css('backgroundColor', diodeColor);
                                                        $('#diode4_1').css('backgroundColor', diodeColor);
                                                        $('#diode5_1').css('backgroundColor', diodeColor);
                                                        $('#diode6_1').css('backgroundColor', diodeColor);
                                                        $('#diode6_4').css('backgroundColor', diodeColor);
                                                        $('#diode5_5').css('backgroundColor', diodeColor);
                                                        $('#diode4_5').css('backgroundColor', diodeColor);
                                                        $('#diode3_5').css('backgroundColor', diodeColor);
                                                        $('#diode2_4').css('backgroundColor', diodeColor);
                                                        $('#diode3_3').css('backgroundColor', diodeColor);
                                                        $('#diode4_3').css('backgroundColor', diodeColor);
                                                        $('#diode5_3').css('backgroundColor', diodeColor);
                                                        
                                                        $('#diode4_2').css('backgroundColor', diodeColor);
                                                        break;
                                                        case 'я':
                                                            clear();
                                                            $('#diode2_4').css('backgroundColor', diodeColor);
                                        $('#diode3_4').css('backgroundColor', diodeColor);
                                        $('#diode4_4').css('backgroundColor', diodeColor);
                                        $('#diode5_4').css('backgroundColor', diodeColor);
                                        $('#diode6_4').css('backgroundColor', diodeColor);
                                        $('#diode2_3').css('backgroundColor', diodeColor);
                                        $('#diode2_2').css('backgroundColor', diodeColor);
                                        $('#diode3_2').css('backgroundColor', diodeColor);
                                        $('#diode4_2').css('backgroundColor', diodeColor);
                                        $('#diode5_3').css('backgroundColor', diodeColor);
                                        $('#diode6_2').css('backgroundColor', diodeColor);
                                        $('#diode7_4').css('backgroundColor', diodeColor);
                                        $('#diode7_2').css('backgroundColor', diodeColor);
                                        break;
                                        default:
                                            document.getElementById("1_1").style.backgroundColor = errorColor;
                                            document.getElementById("1_2").style.backgroundColor = errorColor;
                                            document.getElementById("1_3").style.backgroundColor = errorColor;
                                            document.getElementById("1_4").style.backgroundColor = errorColor;
                                            document.getElementById("1_5").style.backgroundColor = errorColor;
                                            document.getElementById("3_1").style.backgroundColor = errorColor;
                                            document.getElementById("3_2").style.backgroundColor = errorColor;
                                            document.getElementById("3_3").style.backgroundColor = errorColor;
                                            document.getElementById("3_4").style.backgroundColor = errorColor;
                                            document.getElementById("3_5").style.backgroundColor = errorColor;
                                            document.getElementById("5_1").style.backgroundColor = errorColor;
                                            document.getElementById("5_2").style.backgroundColor = errorColor;
                                            document.getElementById("5_3").style.backgroundColor = errorColor;
                                            document.getElementById("5_4").style.backgroundColor = errorColor;
                                            document.getElementById("5_5").style.backgroundColor = errorColor;
                                            document.getElementById("7_1").style.backgroundColor = errorColor;
                                            document.getElementById("7_2").style.backgroundColor = errorColor;
                                            document.getElementById("7_3").style.backgroundColor = errorColor;
                                            document.getElementById("7_4").style.backgroundColor = errorColor;
                                            document.getElementById("7_5").style.backgroundColor = errorColor;
                                        
                                       



                                        



                   

                                    




                                                            


                                           
                                                                

            }
            i++;
        }
        else {
			clear();
			clearInterval(timerId);
        }
    },500)
}