import "./spec-table.css";

type SpecTableProps = {
  caption: string;
  columns: string[];
  rows: string[][];
  monoFrom?: number;
  shadeColumn?: number;
};

export function SpecTable({ caption, columns, rows, monoFrom, shadeColumn }: SpecTableProps) {
  return (
    <div className="table-scroll">
      <table className="spec-table" data-shade={shadeColumn}>
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${columns[index]}`}
                  data-label={columns[index]}
                  className={monoFrom !== undefined && index >= monoFrom ? "mono" : undefined}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
