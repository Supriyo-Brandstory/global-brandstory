import styles from "@/style/blogdetail.module.css";

export default function BlogTable({ data }) {
  const headers = Array.isArray(data?.heading)
    ? data.heading.map((item) => item?.heading).filter(Boolean)
    : [];

  const rows = Array.isArray(data?.Row) || Array.isArray(data?.row)
    ? (data?.Row || data?.row).map((row) => ({
        id: row?.id,
        cells: Array.isArray(row?.cells)
          ? row.cells.map((cell) => cell?.tableData || "")
          : [],
      }))
    : [];

  if (!headers.length && !rows.length) return null;

  const columnCount = Math.max(
    headers.length,
    ...rows.map((row) => row.cells.length),
    0
  );

  return (
    <div className={styles.tableWrap}>
      <table className={styles.blogTable}>
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((heading, index) => (
                <th key={`${heading}-${index}`}>{heading}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.id || rowIndex}>
              {Array.from({ length: columnCount }).map((_, cellIndex) => (
                <td key={`${row.id || rowIndex}-${cellIndex}`}>
                  {row.cells[cellIndex] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
