/**
 * Table Component - Minimal Clean Style
 *
 * Swiss-inspired data table with restrained styling. Clean lines, generous
 * whitespace, subtle borders. Black, white, and gray palette. Borders over
 * shadows for separation. Fast 100ms transitions for hover states.
 */

import type { ReactNode } from "react";

/**
 * Represents a single column definition.
 */
export interface TableColumn<T> {
  /** Unique key for the column, matching a property in the data */
  key: keyof T;
  /** Display header for the column */
  header: string;
  /** Optional custom alignment for the column */
  align?: "left" | "center" | "right";
  /** Optional custom render function for cell content */
  render?: (value: T[keyof T], row: T) => ReactNode;
}

/**
 * Props for the Table component.
 */
export interface TableProps<T> {
  /** Array of column definitions */
  columns: TableColumn<T>[];
  /** Array of data rows */
  data: T[];
  /** Unique key property for each row */
  rowKey: keyof T;
  /** Enable alternating row backgrounds */
  striped?: boolean;
  /** Show borders around cells */
  bordered?: boolean;
  /** Enable hover highlighting on rows */
  hoverable?: boolean;
  /** Optional class name for the table container */
  className?: string;
  /** Optional caption for accessibility */
  caption?: string;
}

/**
 * Data table component with configurable styling options.
 * Displays tabular data with headers and rows.
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
    <div className={`overflow-x-auto font-[Inter,system-ui,sans-serif] ${className}`}>
      <table className="min-w-full">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead>
          <tr className="border-b border-[#111]">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                scope="col"
                className={`
                  px-4 py-3 text-xs font-medium uppercase tracking-widest text-gray-500
                  ${getAlignmentClass(column.align)}
                  ${bordered ? "border-x border-gray-200 first:border-l-0 last:border-r-0" : ""}
                `}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={String(row[rowKey])}
              className={`
                border-b border-gray-100 transition-colors duration-100
                ${striped && rowIndex % 2 === 1 ? "bg-gray-50" : "bg-white"}
                ${hoverable ? "hover:bg-gray-50" : ""}
              `}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={`
                    px-4 py-4 text-sm text-[#111]
                    ${getAlignmentClass(column.align)}
                    ${bordered ? "border-x border-gray-100 first:border-l-0 last:border-r-0" : ""}
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
 * This can be used to preview the table with realistic content.
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
            inline-block px-2 py-0.5 text-xs font-medium rounded border
            ${
              value === "Active"
                ? "bg-white text-[#111] border-[#111]"
                : "bg-white text-gray-400 border-gray-200"
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
