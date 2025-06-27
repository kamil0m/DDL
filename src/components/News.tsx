// import { useState } from "react";
// import { Newspaper } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import useLatestCombined from "./LatestNews";

// export default function News() {
//     // Using the custom hook to fetch latest news and events
//     const { latest } = useLatestCombined();
//     console.log(latest);
//     // if (loading) return <div>Loading...</div>;
//     // if (error) return <div>Something went wrong.</div>;

//     const { data, loading, error } = useFetch("events");
//     console.log(data);
//     const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

//     const toggleDescription = (index: number) => {
//         setExpandedIndexes((prev) =>
//             prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//         );
//     };

//     const truncate = (text: string, length = 100) => {
//         return text.length > length ? text.substring(0, length) + "..." : text;
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Something went wrong.</div>;

//     return (
//         <section className="flex flex-col items-center mt-40 gap-6">
//             <div className="text-center">
//                 <h3 className="mb-4">Our Recent News</h3>
//                 <p>
//                     There are many variations of passages of Lorem Ipsum available
//                     <br /> but the majority have suffered alteration in some form.
//                 </p>
//             </div>

//             <div className="flex flex-row flex-wrap justify-center gap-8 mt-8">
//                 {data?.data?.map((item: any, index: number) => {
//                     const attr = item;

//                     if (!attr.Tytul && !attr.Tresc) return null;

//                     const title = attr.Tytul || "Untitled";
//                     const description = attr.Tresc || "";
//                     const eventDate = attr.Data_wydarzenia || "Brak daty";
//                     const image = attr.Zdjecie?.data?.attributes?.url
//                         ? `https://ddlille-9b0a6ce9f6c7.herokuapp.com${attr.Zdjecie.data.attributes.url}`
//                         : "src/styles/images/news-1.jpg";

//                     return (
//                         <div key={index} className="w-[500px] h-[750px] flex flex-col gap-4">
//                             <div className="relative rounded-lg overflow-hidden shadow-md">
//                                 <img
//                                     src={image}
//                                     alt="News"
//                                     className="w-full h-full object-cover"
//                                 />
//                                 <div className="absolute top-2 left-2 flex flex-col gap-1">
//                                     <span className="flex items-center gap-1 text-l font-semibold px-2 py-1 rounded bg-blue text-white">
//                                         <Newspaper size={16} /> News
//                                     </span>
//                                 </div>
//                             </div>

//                             <div className="flex flex-col gap-4">
//                                 <h4>{title}</h4>
//                                 <p>Event date: {eventDate}</p>
//                                 <p>
//                                     {expandedIndexes.includes(index)
//                                         ? description
//                                         : truncate(description, 100)}
//                                 </p>
//                                 <button
//                                     onClick={() => toggleDescription(index)}
//                                     className="underline text-2xl text-darkgrey mt-1 self-start"
//                                 >
//                                     {expandedIndexes.includes(index) ? "see less" : "see more"}
//                                 </button>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }

//V2
// import { useState } from "react";
// import { Newspaper } from "lucide-react";
// import useLatestCombined from "./LatestNews";

// export default function News() {
//     const { latest } = useLatestCombined();
//     const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

//     const toggleDescription = (index: number) => {
//         setExpandedIndexes((prev) =>
//             prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//         );
//     };

//     const truncate = (text: string, length = 100) =>
//         text.length > length ? text.substring(0, length) + "..." : text;

//     return (
//         <section className="flex flex-col items-center mt-40 px-4 gap-10">
//             <div className="text-center max-w-2xl">
//                 <h3 className="text-3xl font-bold mb-4">Our Recent News</h3>
//                 <p className="text-gray-600">
//                     There are many variations of passages of Lorem Ipsum available
//                     <br /> but the majority have suffered alteration in some form.
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl w-full">
//                 {latest.map((item: any, index: number) => {
//                     const title = item.Tytul || "Untitled";
//                     const descriptionBlocks = item.Tresc || [];
//                     const descriptionText = descriptionBlocks
//                         .map((block: any) =>
//                             block.children?.map((child: any) => child.text).join(" ")
//                         )
//                         .join(" ");

//                     const eventDate = item.Data_wydarzenia || "Brak daty";
//                     const image = item.Zdjecie?.data?.attributes?.url
//                         ? `https://ddlille-9b0a6ce9f6c7.herokuapp.com${item.Zdjecie.data.attributes.url}`
//                         : "/src/styles/images/news-1.jpg";

//                     return (
//                         <div
//                             key={item.id}
//                             className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
//                         >
//                             <div className="relative h-56 w-full">
//                                 <img
//                                     src={image}
//                                     alt="News"
//                                     className="w-full h-full object-cover"
//                                 />
//                                 <div className="absolute top-2 left-2">
//                                     <span className="flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded bg-blue text-white">
//                                         <Newspaper size={14} /> News
//                                     </span>
//                                 </div>
//                             </div>

//                             <div className="flex flex-col gap-3 p-4 flex-grow">
//                                 <h4 className="text-lg font-semibold text-blue-700">{title}</h4>
//                                 <p className="text-sm text-gray-500">Event date: {eventDate}</p>
//                                 <p className="text-sm text-gray-700">
//                                     {expandedIndexes.includes(index)
//                                         ? descriptionText
//                                         : truncate(descriptionText, 100)}
//                                 </p>
//                                 <button
//                                     onClick={() => toggleDescription(index)}
//                                     className="underline text-blue-600 text-sm mt-1 self-start"
//                                 >
//                                     {expandedIndexes.includes(index) ? "see less" : "see more"}
//                                 </button>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }



//V3

// import { useState } from "react";
// import { Newspaper } from "lucide-react";
// import useLatestCombined from "./LatestNews";

// export default function News() {
//     const { latest } = useLatestCombined();
//     const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
//     console.log(latest);

//     const toggleDescription = (index: number) => {
//         setExpandedIndexes((prev) =>
//             prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//         );
//     };

//     const truncate = (text: string, length = 100) =>
//         text.length > length ? text.substring(0, length) + "..." : text;

//     return (
//         <section className="flex flex-col items-center mt-40 px-4 gap-10">
//             <div className="text-center max-w-2xl">
//                 <h3 className="text-3xl font-bold mb-4">Our Recent News</h3>
//                 <p className="text-gray-600">
//                     There are many variations of passages of Lorem Ipsum available
//                     <br /> but the majority have suffered alteration in some form.
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl w-full">
//                 {latest.map((item: any, index: number) => {
//                     const title = item.Tytul || "Untitled";
//                     const descriptionBlocks = item.Tresc || [];
//                     const descriptionText = descriptionBlocks
//                         .map((block: any) =>
//                             block.children?.map((child: any) => child.text).join(" ")
//                         )
//                         .join(" ");

//                     const eventDate = item.Data_wydarzenia || "Brak daty";
//                     const image = item.Zdjecie?.data?.attributes?.url
//                         ? `https://ddlille-9b0a6ce9f6c7.herokuapp.com${item.Zdjecie.data.attributes.url}`
//                         : "/src/styles/images/news-1.jpg";

//                     // determine if it's news or event
//                     const type = item.type || "news"; // default to "news" if missing

//                     return (
//                         <div
//                             key={item.id || index}
//                             className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
//                         >
//                             <div className="relative h-56 w-full">
//                                 <img
//                                     src={image}
//                                     alt="News"
//                                     className="w-full h-full object-cover"
//                                 />
//                                 <div className="absolute top-2 left-2 flex gap-2">
//                                     {type === "news" && (
//                                         <span className="bg-blue-600 text-white text-l font-semibold px-2 py-1 rounded">
//                                             <Newspaper className="inline mx-1" size={16} /> News
//                                         </span>
//                                     )}
//                                     {type === "event" && (
//                                         <span className="bg-indigo-600 text-white text-l font-semibold px-2 py-1 rounded">
//                                             ★ Event
//                                         </span>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="flex flex-col gap-3 p-4 flex-grow">
//                                 <h4 className="text-lg font-semibold text-blue-700">{title}</h4>
//                                 <p className="text-sm text-gray-500">Event date: {eventDate}</p>
//                                 <p className="text-sm text-gray-700">
//                                     {expandedIndexes.includes(index)
//                                         ? descriptionText
//                                         : truncate(descriptionText, 100)}
//                                 </p>
//                                 <button
//                                     onClick={() => toggleDescription(index)}
//                                     className="underline text-blue-600 text-sm mt-1 self-start"
//                                 >
//                                     {expandedIndexes.includes(index) ? "see less" : "see more"}
//                                 </button>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }


//V4

import { useState } from "react";
import { Newspaper } from "lucide-react";
import useLatestCombined from "./LatestNews";

export default function News() {
    const { latest } = useLatestCombined();
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

    const toggleDescription = (index: number) => {
        setExpandedIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const truncate = (text: string, length = 100) =>
        text.length > length ? text.substring(0, length) + "..." : text;

    return (
        <section className="flex flex-col items-center mt-40 px-4 gap-10">
            <div className="text-center">
                <h3 className="mb-4">Our Recent News</h3>
                <p className="">
                    There are many variations of passages of Lorem Ipsum available
                    <br /> but the majority have suffered alteration in some form.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl w-full">
                {latest.map((item: any, index: number) => {
                    const title = item.Tytul || "Untitled";
                    const descriptionBlocks = item.Tresc || [];
                    const descriptionText = Array.isArray(descriptionBlocks)
                        ? descriptionBlocks
                            .map((block: any) =>
                                block.children?.map((child: any) => child.text).join(" ")
                            )
                            .join(" ")
                        : descriptionBlocks;

                    const eventDate = item.Data_wydarzenia || "Brak daty";
                    const image = item.Zdjecie?.data?.attributes?.url
                        ? `https://ddlille-9b0a6ce9f6c7.herokuapp.com${item.Zdjecie.data.attributes.url}`
                        : "/src/styles/images/logo.jpg";

                    const type = item.type || "news";

                    return (
                        <div
                            key={item.id || index}
                            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                        >
                            <div className="relative h-56 w-full">
                                <img
                                    src={image}
                                    alt="News"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
                                    {type === "news" && (
                                        <span className="bg-white text-accent text-l font-semibold px-2 py-1 rounded">
                                            <Newspaper className="inline-block mr-1" size={16} />
                                            News
                                        </span>
                                    )}
                                    {type === "event" && (
                                        <span className="bg-accent text-white text-l font-semibold px-2 py-1 rounded">
                                            ★ Event
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 p-4 flex-grow">
                                <div className="flex justify-between items-center flex-wrap text-l">
                                    <div className="flex flex-wrap gap-2">
                                        {item.isImportant && type === "news" && (
                                            <span className="bg-orange text-white font-medium px-2 py-1 rounded">
                                                Important
                                            </span>
                                        )}
                                        {item.isNew ? (
                                            <span className="bg-skyblue text-white font-medium px-2 py-1 rounded">
                                                New
                                            </span>
                                        ) : (
                                            <span className="bg-green text-white font-medium px-2 py-1 rounded">
                                                Published {item.publishedDaysAgo} days ago
                                            </span>
                                        )}
                                    </div>

                                    <div className="text-darkgrey text-xl font-medium px-2 py-1">
                                        {item.publishedDaysAgo === 0
                                            ? "Published today"
                                            : new Date(item.Data_publikacji).toLocaleDateString("en-GB")}
                                    </div>
                                </div>


                                <h4>{title}</h4>
                                <p className="text-sm text-darkgrey">Event date: {eventDate}</p>
                                <p className="text-sm text-darkgrey">
                                    {expandedIndexes.includes(index)
                                        ? descriptionText
                                        : truncate(descriptionText, 100)}
                                </p>
                                <button
                                    onClick={() => toggleDescription(index)}
                                    className="underline text-blue-600 text-sm mt-1 self-start"
                                >
                                    {expandedIndexes.includes(index) ? "see less" : "see more"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

