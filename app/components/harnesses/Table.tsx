/**
 * Table Harness Component
 *
 * A data table component for displaying tabular information with headers,
 * rows, and various optional features like striping and borders. This tests
 * how a style handles information-dense UI.
 *
 * Style .md files should customize:
 * - Header background and text styling
 * - Cell padding and border treatment
 * - Row striping colors (if enabled)
 * - Hover state for rows
 * - Border style (full, horizontal only, or borderless)
 * - Text alignment for different column types
 * - Overall table density (compact vs spacious)
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
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                scope="col"
                className={`
                  px-4 py-3 text-sm font-semibold text-gray-700
                  ${getAlignmentClass(column.align)}
                  ${bordered ? "border border-gray-200" : ""}
                `}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={String(row[rowKey])}
              className={`
                ${striped && rowIndex % 2 === 1 ? "bg-gray-50" : ""}
                ${hoverable ? "hover:bg-gray-100" : ""}
              `}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={`
                    px-4 py-3 text-sm text-gray-700
                    ${getAlignmentClass(column.align)}
                    ${bordered ? "border border-gray-200" : ""}
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
            inline-block px-2 py-0.5 text-xs font-medium rounded
            ${value === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}
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
