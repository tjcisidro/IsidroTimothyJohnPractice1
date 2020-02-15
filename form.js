function val(){
    if (document.getElementById('in2').checked) {
            jQuery('#div1').toggle('show');
        }else{
            jQuery('#div1').toggle('hide');
    }}
function val2(){
    if (document.getElementById('in3').checked) {
            jQuery('#div2').toggle('show');
        }else{
            jQuery('#div2').toggle('hide');
    }}
function val3(){    
    if (document.getElementById('in4').checked) {
            jQuery('#div3').toggle('show');
        }else{
            jQuery('#div3').toggle('hide');
    }
    }
function val4(){

    if (document.getElementById('in5').checked) {
                jQuery('#div4').toggle('show');
        }else{
                jQuery('#div4').toggle('hide');
    }
}

function conf(){
    if (document.getElementById('enddate').value < document.getElementById('startdate').value ){
        alert("The End Date should be later than the Start Date");
        document.getElementById('enddate').value = null;
    }
}
