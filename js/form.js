// wait for the DOM to be loaded 
        $(document).ready(function() { 
            // bind 'myForm' and provide a simple callback function 
            $('#mainForm').ajaxForm(function() { 
                alert("Ваш заказ успешно отправлен!\nЖдите Ответа =)"); 
            });

            $('#modalForm').ajaxForm(function() { 
                alert("Ваш заказ успешно отправлен!\nЖдите Ответа =)"); 
            });

            $('#questionForm').ajaxForm(function() { 
                alert("Ваш вопрос успешно отправлен!\nЖдите Ответа =)"); 
            });

        }); 