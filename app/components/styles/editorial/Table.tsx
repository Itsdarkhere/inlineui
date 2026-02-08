/**
 * Table - Editorial Style
 *
 * Data tables with newspaper-like clarity and restraint.
 * Horizontal rules, clean typography, subtle striping.
 * Headers in small caps, generous padding.
 */

import type { ReactNode } from "react";

export interface TableColumn<T> {
  key: keyof T;
  header: string;
  align?: "left" | "center" | "right";
  render?: (value: T[keyof T], row: T) => ReactNode;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey: keyof T;
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  className?: string;
  caption?: string;
}

/**
 * Data table component with editorial styling.
 * Clean lines, typographic headers, readable rows.
 */
export function Table<T>({
  columns,
  data,
  rowKey,
  striped = false,
  bordered = false,
  hoverable = false,
  className = "",
  caption,
}: TableProps<T>) {
  const getAlignmentClass = (align?: "left" | "center" | "right") => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  return (
    <div className={`overflow-x-auto font-['Inter',system-ui,sans-serif] ${className}`}>
      <table className="min-w-full">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead>
          <tr className="border-b-2 border-zinc-900">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                scope="col"
                className={`
                  px-4 py-3
                  text-xs font-semibold uppercase tracking-widest
                  text-zinc-600
                  ${getAlignmentClass(column.align)}
                  ${bordered ? "border border-zinc-200" : ""}
                `}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {data.map((row, rowIndex) => (
            <tr
              key={String(row[rowKey])}
              className={`
                ${striped && rowIndex % 2 === 1 ? "bg-zinc-50" : "bg-white"}
                ${hoverable ? "hover:bg-zinc-100 transition-colors duration-100" : ""}
              `}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={`
                    px-4 py-4
                    text-sm text-zinc-700
                    ${getAlignmentClass(column.align)}
                    ${bordered ? "border border-zinc-200" : ""}
                  `}
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : String(row[column.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * User type for the example table.
 */
interface ExampleUser {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

/**
 * Example usage with sample data.
 */
export function TableExample() {
  const columns: TableColumn<ExampleUser>[] = [
    { key: "id", header: "ID", align: "center" },
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "role", header: "Role" },
    {
      key: "status",
      header: "Status",
      align: "center",
      render: (value) => (
        <span
          className={`
            inline-block px-2.5 py-0.5
            text-[10px] font-semibold uppercase tracking-wider
            ${
              value === "Active"
                ? "bg-zinc-900 text-white"
                : "bg-zinc-100 text-zinc-500"
            }
          `}
        >
          {String(value)}
        </span>
      ),
    },
  ];

  const data: ExampleUser[] = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
    { id: 3, name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
    { id: 4, name: "David Brown", email: "david@example.com", role: "Editor", status: "Active" },
  ];

  return (
    <Table<ExampleUser>
      columns={columns}
      data={data}
      rowKey="id"
      striped
      hoverable
      caption="User accounts"
    />
  );
}

export type { TableProps as Props };
