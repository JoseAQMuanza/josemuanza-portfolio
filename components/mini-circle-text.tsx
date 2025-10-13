interface MiniCircleTextProps {
  text: string;
}

export default function MiniCircleText({ text }: MiniCircleTextProps) {
  return (
    <div className="flex items-center gap-2 text-[#C0C0C0]">
      <span className="w-2 h-2 bg-[#616161] rounded-full"></span>
      <span className="font-medium">{text}</span>
    </div>
  );
}