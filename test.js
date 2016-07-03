var result = 0;

$("#test-result").click( function () {
    if ($(".qv1")[0].checked) {
        result += 1;
    }

    if ($(".qv2")[2].checked) {
        result += 1;
    }

    if ($(".qv3")[3].checked) {
        result += 1;
    } 

    if  (!$(".qv4")[0].checked && $(".qv4")[1].checked && !$(".qv4")[2].checked && $(".qv4")[3].checked) {
     result += 1;
    }

    if  ($(".qv5")[0].checked && $(".qv5")[1].checked && !$(".qv5")[2].checked && !$(".qv5")[3].checked) {
     result += 1;
    }

alert("Вы набрали " + result + " баллов " + result * 20 + "% правильных ответов!"); 

result = 0;
})


