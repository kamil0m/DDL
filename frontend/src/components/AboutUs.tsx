import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';


export default function AboutUs() {

  // const { data, loading, error } = useFetch('http://localhost:1337/api/blogs');
  // console.log(data);

  const data = {
    "data": [
        {
            "id": 5,
            "documentId": "w7olcza47lvjtpkl8ocj1wnj",
            "About": [
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Dzień Dobry Lille",
                            "bold": true
                        },
                        {
                            "type": "text",
                            "text": " to stowarzyszenie skierowane do Polonii w północnej Francji oraz naszych francuskich przyjaciół. Tworzymy "
                        },
                        {
                            "type": "text",
                            "text": "przestrzeń",
                            "underline": true
                        },
                        {
                            "type": "text",
                            "text": ", w której Polacy w Lille i okolicach mogą się wspierać, wymieniać doświadczeniami oraz budować silną, zintegrowaną społeczność."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Na naszej stronie Polacy w Lille i Métropole – Dzień Dobry Lille znajdziecie aktualne informacje o życiu Polonii, lokalnych wydarzeniach oraz polskich inicjatywach w regionie. Informujemy o nowościach w biblioteczce w Malince, polecamy polskie atrakcje turystyczne – również te mniej znane – oraz dzielimy się inspiracjami kulinarnymi, zarówno tradycyjnymi, jak i nowoczesnymi przepisami."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Lille to dynamiczna metropolia licząca ponad milion mieszkańców, położona przy granicy z Belgią. W całej aglomeracji mieszka wielu Polaków oraz osób o polskich korzeniach. Nasza grupa powstała, aby każdy mógł znaleźć wsparcie, zadać pytanie i w razie potrzeby otrzymać pomoc. "
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Lorem Ipsum"
                        }
                    ],
                    "level": 1
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "\"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                }
            ],
            "createdAt": "2025-03-21T01:30:36.553Z",
            "updatedAt": "2025-03-22T09:08:04.653Z",
            "publishedAt": "2025-03-22T09:08:04.657Z",
            "Cele": [
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Naszym celem jest budowanie pozytywnych relacji w polskiej społeczności w MEL, w atmosferze wzajemnego szacunku i bez hejtu."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Zapraszamy wszystkich do dzielenia się swoimi doświadczeniami, poradami i wskazówkami – razem możemy więcej!"
                        }
                    ]
                }
            ]
        },
        {
            "id": 7,
            "documentId": "h6xgdyij6zk87bse6h95bz9k",
            "About": [
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "for testing"
                        }
                    ]
                }
            ],
            "createdAt": "2025-03-22T11:28:32.713Z",
            "updatedAt": "2025-03-22T11:28:32.713Z",
            "publishedAt": "2025-03-22T11:28:32.717Z",
            "Cele": [
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "cele for for testing"
                        }
                    ]
                }
            ]
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 2
        }
    }
  };

  console.log(data);
  console.log(data.data[0].About);


  

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;

  return (
    <div className="flex-col h-screen bg-linear-to-t from-sky-500 to-indigo-500">
      <div className="flex-col max-w-2xl rounded-xl p-8 shadow-lg outline-black/5 bg-blue-100/50">
        <h1 className="text-center width-full">O nas</h1>
        {<BlocksRenderer content={data.data[0].About} /> } // dziala kiedy obiekt jest zdefiniowany lokalnie ale nie kiedy jest pobierany z api

        {/* {data.data.map((item) => (
          <div className="" key={item.id}>
            {item.About.map((para, index) => (
              <p key={index}>{para.children.map(child => child.text)}</p>
            ))}

            <h2>Nasze cele</h2>
            {item.Cele.map((para, index) => (
              <p key={index}>{para.children.map(child => child.text).join(" ")}</p>
            ))}
          </div>
        ))} */}
      </div>
    </div>
    
  )
}