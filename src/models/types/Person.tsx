import { BlocksContent } from '@strapi/blocks-react-renderer';

export type Person = {
    id: number;
    documentId?: number;
    Imie: string;
    Nazwisko: string;
    Funkcja: string;
    Opis?: BlocksContent;
    [key: string]: unknown;
};