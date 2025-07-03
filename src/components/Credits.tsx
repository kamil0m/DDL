interface CreditsProps {
  content: string;
}

export default function Credits({ content }: CreditsProps) {
  return (
    <div className="absolute bottom-0 right-5 z-2 text-white text-[1/4rem] font-thin">© {content}</div>
  )
}
