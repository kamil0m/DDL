import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import CardProps from '../models/interfaces/CardProps.tsx';

export default function Card(props: CardProps) {

    const content = props.content;

    return (
        <div className="card text-justify my-2 rounded-xl p-8 shadow-lg outline-black/5 bg-slate-800/90">
            {/* <h2 className="card__title text-center width-full text-white-900 text-2xl font-bold">{content.Title}</h2> */}
            <BlocksRenderer content={content} />
        </div>
    )
}
