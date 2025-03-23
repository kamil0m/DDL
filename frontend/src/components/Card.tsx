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
        <div className="card text-justify my-2 rounded-xl p-8 shadow-lg outline-black/5 bg-blue-100/50">
            <h2 className="card__title text-center width-full text-slate-900 text-2xl font-bold">{content.Title}</h2>
            <BlocksRenderer content={content.Content} />
        </div>
    )
}
