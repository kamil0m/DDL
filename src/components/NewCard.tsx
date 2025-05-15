import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { blocks } from '../styles/content/BlocksRendererConfig.tsx';
import CardProps from '../models/interfaces/CardProps.tsx';

export default function Card(props: CardProps) {

    const content = props.content;

    return (
        <div className="card text-justify my-2 rounded-xl p-8 shadow-lg outline-black/5 bg-slate-800/90">
            <BlocksRenderer content={content} blocks={blocks} />
        </div>
    )
}