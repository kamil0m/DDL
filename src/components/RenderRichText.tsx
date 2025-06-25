import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface RenderRichTextProps {
  content: BlocksContent;
  pClasses?: string;
  h1Classes?: string;
  h2Classes?: string;
  h3Classes?: string;
  h4Classes?: string;
  h5Classes?: string;
  h6Classes?: string;
  olClasses?: string;
  ulClasses?: string;
  liClasses?: string;
  blockquoteClasses?: string;
  preClasses?: string;
  figureClasses?: string;
  imgClasses?: string;
  figcaptionClasses?: string;
  linkClasses?: string;
  codeClasses?: string;
}

export default function RenderRichText({ 
  content, 
  pClasses = '', 
  h1Classes = '', 
  h2Classes = '', 
  h3Classes = '', 
  h4Classes = '', 
  h5Classes = '', 
  h6Classes = '', 
  olClasses = '', 
  ulClasses = '', 
  liClasses = '', 
  blockquoteClasses = '', 
  preClasses = '', 
  figureClasses = '',
  imgClasses = '', 
  figcaptionClasses = '', 
  linkClasses = '', 
  codeClasses = '' 
}: RenderRichTextProps) {
  return (
    <>
      <BlocksRenderer 
        content={content}
        blocks={{
          // Paragraph
          paragraph: ({ children }) => (
            <p className={pClasses}>
              {children}
            </p>
          ),
          
          // Headings
          heading: ({ children, level }) => {
            const headingClasses: { [key: number]: string | undefined } = {
              1: h1Classes,
              2: h2Classes,
              3: h3Classes,
              4: h4Classes,
              5: h5Classes,
              6: h6Classes
            };

            const className = headingClasses[level];

            switch (level) {
              case 1:
                return <h1 className={className}>{children}</h1>;
              case 2:
                return <h2 className={className}>{children}</h2>;
              case 3:
                return <h3 className={className}>{children}</h3>;
              case 4:
                return <h4 className={className}>{children}</h4>;
              case 5:
                return <h5 className={className}>{children}</h5>;
              case 6:
                return <h6 className={className}>{children}</h6>;
              default:
                return <h2 className={className}>{children}</h2>;
            }
          },
          
          // Lists
          list: ({ children, format }) => {
            if (format === 'ordered') {
              return (
                <ol className={olClasses}>
                  {children}
                </ol>
              );
            }
            return (
              <ul className={ulClasses}>
                {children}
              </ul>
            );
          },
          
          'list-item': ({ children }) => (
            <li className={liClasses}>{children}</li>
          ),
          
          // Quote
          quote: ({ children }) => (
            <blockquote className={blockquoteClasses}>
              {children}
            </blockquote>
          ),
          
          // Code block
          code: ({ plainText }) => (
            <pre className={preClasses}>
              <code className={codeClasses}>{plainText}</code>
            </pre>
          ),
          
          // Image
          image: ({ image }) => (
            <figure className={figureClasses}>
              <img
                src={image.url}
                alt={image.alternativeText || ''}
                className={imgClasses}
                width={image.width}
                height={image.height}
              />
              {image.caption && (
                <figcaption className={figcaptionClasses}>
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ),
          
          // Link
          link: ({ children, url }) => (
            <a
              href={url}
              className={linkClasses}
              target={url.startsWith('http') ? '_blank' : '_self'}
              rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          )
        }}
        
        modifiers={{
          // Text formatting
          bold: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
          ),
          
          italic: ({ children }) => (
            <em className="italic">{children}</em>
          ),
          
          underline: ({ children }) => (
            <span className="underline">{children}</span>
          ),
          
          strikethrough: ({ children }) => (
            <span className="line-through">{children}</span>
          ),
          
          code: ({ children }) => (
            <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
              {children}
            </code>
          )
        }}
      />
    </>
  );
}
