import { TFunction } from "i18next";

export default interface FormInputProps {
    label: string
    type: string
    id: string
    placeholder?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    t: TFunction
}