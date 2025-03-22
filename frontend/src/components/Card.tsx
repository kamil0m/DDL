import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface CardProps {
    content: {
        Title: string;
        Content: BlocksContent;
    };
}

export default function Card(props: CardProps) {

    const content = props.content;

    return (
        <div className="text-justify card flex-col max-w-2xl rounded-xl p-8 shadow-lg outline-black/5 bg-blue-100/50">
            <h2 className="card__title text-center width-full">{content.Title}</h2>
            <BlocksRenderer content={content.Content} />
        </div>
    )
}
