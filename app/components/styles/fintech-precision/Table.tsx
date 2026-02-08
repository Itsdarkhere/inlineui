/**
 * Table - Fintech Precision Style
 *
 * Bloomberg/trading terminal inspired data table.
 * Dense layout, monospace numbers, clear grid lines, hover highlights.
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
 * Data table component with fintech precision styling.
 * Displays tabular data with terminal-inspired aesthetics.
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
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead>
          <tr className="border-b-2 border-neutral-700">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                scope="col"
                className={`
                  px-3 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider
                  bg-neutral-900
                  ${getAlignmentClass(column.align)}
                  ${bordered ? "border border-neutral-800" : ""}
                `}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-800">
          {data.map((row, rowIndex) => (
            <tr
              key={String(row[rowKey])}
              className={`
                transition-colors duration-75
                ${striped && rowIndex % 2 === 1 ? "bg-neutral-900/50" : "bg-neutral-950"}
                ${hoverable ? "hover:bg-neutral-800" : ""}
              `}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={`
                    px-3 py-2 text-sm text-neutral-300 font-mono tabular-nums
                    ${getAlignmentClass(column.align)}
                    ${bordered ? "border border-neutral-800" : ""}
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
 * Example usage with sample data - trading-style data display.
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
            inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded
            ${value === "Active"
              ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
              : "bg-neutral-800 text-neutral-400 border border-neutral-700"}
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
