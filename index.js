var formData = {
    email: '',
    title: '',
    text: '',
    checkbox: false
};
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
var submit = document.querySelector('.btn');
var checkbox = document.getElementById('checkbox');
var email_input = document.getElementById('email');
var title_input = document.getElementById('title');
var text = document.getElementById('text');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    var input1 = email_input.value;
    var input2 = title_input.value;
    var input3 = text.value;
    formData.email = input1;
    formData.title = input2;
    formData.text = input3;
    console.log(formData);
    validateFormData(formData);
});
checkbox.addEventListener('change', function (e) {
    e.preventDefault();
    var input4 = checkbox.value;
    if (input4 === 'on') {
        formData.checkbox = true;
    }
});
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if (!!data.email && !!data.text && !!data.title && data.checkbox) {
        checkFormData(data);
        return true;
    }
    else {
        console.log('Please, complete all fields');
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];
    // Если email совпадает хотя бы с одним из массива
    if (emails.includes(email)) {
        console.log('This email is already exist');
    }
    else {
        console.log('Posting data...');
    }
}
