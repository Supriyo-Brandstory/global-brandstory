// components/TableOfContents.jsx
export default function TableOfContents({ headings }) {
  return (
    <div className="rounded-[8px] p-6 shadow-xl mb-4" style={{background: "linear-gradient(45deg, rgba(241, 93, 34, 0.66), rgb(0, 0, 0), rgb(0, 0, 0), rgba(241, 93, 34, 0.66))", borderRadius: "24px",width: "100%",padding: '40px 20px'}}>

      {/* Title */}
      <h3 className="text-2xl font-medium text-center text-white mb-4">
        Table of Content
      </h3>

      {/* Divider */}
      <div className="h-px bg-white/20 mb-4" />

      {/* List */}
      <ol className="space-y-4">
        {headings.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group block text-white text-sm leading-relaxed"
            >
              <div className="flex gap-3">
                {/* Number */}
                <span className="text-white/80">
                  {index + 1}.
                </span>

                {/* Text */}
                <span className="group-hover:text-[#F15D22] text-[18px] transition-colors">
                  {item.text}
                </span>
              </div>

              {/* Dotted underline */}
              <div className="mt-3 h-px border-b border-dotted border-[#F15D22]/40" />
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
