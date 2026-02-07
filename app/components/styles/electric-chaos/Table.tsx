/**
 * Table Component - Electric Chaos Style
 *
 * DATA TABLES THAT SLAP. Pure black backgrounds with neon borders and glowing
 * rows. Electric purple, acid green, hot pink, cyan, orange. Thick borders,
 * heavy border radius, dramatic hover states with 400ms bouncy transitions.
 * All-caps headers. Nothing is subtle. Everything demands attention.
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

  const colors = ["#8B5CF6", "#EC4899", "#84CC16", "#06B6D4", "#F97316"];

  return (
    <div
      className={`overflow-x-auto font-[Space_Grotesk,system-ui,sans-serif] p-6 rounded-3xl ${className}`}
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 100%)",
        boxShadow: "0 0 60px rgba(139, 92, 246, 0.3)",
      }}
    >
      <table className="min-w-full">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr
            style={{
              borderBottom: "3px solid #8B5CF6",
              boxShadow: "0 4px 30px rgba(139, 92, 246, 0.3)",
            }}
          >
            {columns.map((column, index) => (
              <th
                key={String(column.key)}
                scope="col"
                className={`
                  px-6 py-5 text-xs font-bold uppercase tracking-[0.3em]
                  ${getAlignmentClass(column.align)}
                  ${bordered ? "border-x-2 border-[#8B5CF6]/30 first:border-l-0 last:border-r-0" : ""}
                `}
                style={{
                  color: colors[index % colors.length],
                  textShadow: `0 0 20px ${colors[index % colors.length]}50`,
                }}
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
                transition-all duration-400
                ${hoverable ? "hover:scale-[1.01] hover:z-10 relative" : ""}
              `}
              style={{
                borderBottom: "2px solid rgba(139, 92, 246, 0.2)",
                background: striped && rowIndex % 2 === 1
                  ? "rgba(139, 92, 246, 0.05)"
                  : "transparent",
                boxShadow: hoverable ? undefined : undefined,
                transition: "all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                if (hoverable) {
                  const color = colors[rowIndex % colors.length];
                  e.currentTarget.style.background = `linear-gradient(90deg, ${color}15, transparent)`;
                  e.currentTarget.style.boxShadow = `0 0 30px ${color}30, inset 0 0 30px ${color}10`;
                  e.currentTarget.style.borderColor = color;
                }
              }}
              onMouseLeave={(e) => {
                if (hoverable) {
                  e.currentTarget.style.background = striped && rowIndex % 2 === 1
                    ? "rgba(139, 92, 246, 0.05)"
                    : "transparent";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.2)";
                }
              }}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={`
                    px-6 py-5 text-base font-medium text-white
                    ${getAlignmentClass(column.align)}
                    ${bordered ? "border-x-2 border-[#8B5CF6]/20 first:border-l-0 last:border-r-0" : ""}
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
    { key: "name", header: "NAME" },
    { key: "email", header: "EMAIL" },
    { key: "role", header: "ROLE" },
    {
      key: "status",
      header: "STATUS",
      align: "center",
      render: (value) => {
        const isActive = value === "Active";
        const color = isActive ? "#84CC16" : "#EC4899";
        return (
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full"
            style={{
              backgroundColor: `${color}20`,
              color: color,
              border: `2px solid ${color}`,
              boxShadow: `0 0 15px ${color}40`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: color,
                boxShadow: `0 0 8px ${color}`,
              }}
            />
            {String(value)}
          </span>
        );
      },
    },
  ];

  const data: ExampleUser[] = [
    { id: 1, name: "ALICE JOHNSON", email: "alice@chaos.io", role: "ADMIN", status: "Active" },
    { id: 2, name: "BOB SMITH", email: "bob@chaos.io", role: "EDITOR", status: "Active" },
    { id: 3, name: "CAROL WHITE", email: "carol@chaos.io", role: "VIEWER", status: "Inactive" },
    { id: 4, name: "DAVID BROWN", email: "david@chaos.io", role: "EDITOR", status: "Active" },
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
