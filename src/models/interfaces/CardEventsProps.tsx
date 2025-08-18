import CardProps from './CardProps.tsx';
import { type BlocksContent } from '@strapi/blocks-react-renderer';

export default interface CardEventsProps extends CardProps {
    content: {
        Title: string;
        Content: BlocksContent;
        id: number;
        Date: string;
    };
}