const formData = {
    email: '',
    title: '',
    text: '',
    checkbox: false,
};

interface IFormData {
    email: string;
    title: string;
    text: string;
    checkbox: boolean;
}

const submit = document.querySelector('.btn') as HTMLInputElement;
const checkbox = document.getElementById('checkbox') as HTMLInputElement;

const email_input = document.getElementById('email') as HTMLInputElement;
const title_input = document.getElementById('title') as HTMLInputElement;
const text = document.getElementById('text') as HTMLInputElement;

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let input1 = email_input.value;
    let input2 = title_input.value;
    let input3 = text.value;

    formData.email = input1;
    formData.title = input2;
    formData.text = input3;
    console.log(formData);
    validateFormData(formData);
});

checkbox.addEventListener('change', function (e) {
    e.preventDefault();
    let input4 = checkbox.value;
    if (input4 === 'on') {
        formData.checkbox = true;
    }
});

function validateFormData(data: IFormData): boolean {
    // Если каждое из свойств объекта data правдиво...
    if (!!data.email && !!data.text && !!data.title && data.checkbox) {
        checkFormData(data);
        return true;
    } else {
        console.log('Please, complete all fields');
        return false;
    }
}

function checkFormData(data: IFormData): void {
    const emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];

    // Если email совпадает хотя бы с одним из массива

    if (emails.includes(data.email)) {
        console.log('This email is already exist');
    } else {
        console.log('Posting data...');
    }
}
