import StrapiFetchedData from './StrapiFetchedData';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface EventNews extends StrapiFetchedData {
    Tytul: string;
    Tresc: BlocksContent;
    Data_publikacji: string;
    Miejsce_wydarzenia?: string;
    Link_do_Facebook?: string;
    Podpis?: string;
    Data_wydarzenia?: string;
    Zdjecie: null | { url: string }[];
    Wazne?: boolean;
    type?: 'news' | 'event';
    [key: string]: unknown; // Allow additional properties
}