export default function validateFormInput(input: string, type: string): string {

    let errorMessage = '';

    if (type === 'email') {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(input)) {
            errorMessage = 'Niepoprawny adres e-mail';
        }
    }

    if (input === '') {
        errorMessage = 'Pole jest wymagane';

    } 

  return errorMessage
}