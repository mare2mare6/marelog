export default function PostContent({ html }) {
  return (
    <div
      className="mt-8 leading-7 text-gray-700
        [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4
        [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3
        [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2
        [&_p]:mb-4
        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4
        [&_li]:mb-1
        [&_a]:text-blue-500 [&_a]:underline
        [&_img]:rounded-lg [&_img]:my-4
        [&_strong]:font-bold
        [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
        [&_blockquote]:border-l-4 [&_blockquote]:border-gray-200 [&_blockquote]:pl-4 [&_blockquote]:text-gray-500"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}