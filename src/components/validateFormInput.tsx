import { TFunction } from "i18next";

export default function validateFormInput(input: string, type: string, t: TFunction): string {
    let errorMessage = '';

    if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(input)) {
            errorMessage = t("contact.form.validation.errorMail");
        }
    }

    if (input === '' && type !== 'tel') {
        errorMessage = t("contact.form.validation.errorBox");
    }

    return errorMessage;
}
