export default function BlogLayout({ sidebar, children }) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 mt-16">
      <div className="flex gap-10 items-start">
        {sidebar}
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}