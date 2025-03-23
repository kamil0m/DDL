import { type BlocksContent } from '@strapi/blocks-react-renderer';

export default interface CardProps {
    content: {
        Title: string;
        Content: BlocksContent;
    };
}