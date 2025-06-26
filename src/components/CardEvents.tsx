import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useState } from 'react';
import CardEventsProps from '../models/interfaces/CardEventsProps.tsx';


export default function Card(props: CardEventsProps) {

    const [ isExpanded, setIsExpanded ] = useState(false);
    const content = props.content;

    function toggleExpander() { // Function to expand the card when clicked but allowing to select text
        const selection = window.getSelection();
        if (selection && selection.type !== "Range") {
            setIsExpanded(!isExpanded);
        }
    }

    return (
        <div className="card text-justify my-2 rounded-xl p-8 shadow-lg outline-black/5 bg-blue-100/50 cursor-pointer hover:bg-orange-300/50 duration-200 ease-linear" onClick={()=> toggleExpander()}>
            <div className="flex flex-row justify-between">
                <span >
                </span> 
                <h2 className="card__title text-center width-full text-slate-900 text-xl font-bold">{content.Title}</h2>
                <span>{content.Date}</span>
            </div>
            {isExpanded && <BlocksRenderer content={content.Content}  />}
        </div>
    )
}
