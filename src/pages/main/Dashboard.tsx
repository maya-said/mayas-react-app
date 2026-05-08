import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  status: string;
};

function Dashboard() {
  const books: Book[] = [
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
      status: "Available",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Development",
      status: "Borrowed",
    },
    {
      id: 3,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      category: "Programming",
      status: "Available",
    },
  ];

  const columns: ColDef<Book>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Book Title", flex: 1 },
    { field: "author", headerName: "Author", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Total Books</h2>
          <p className="mt-2 text-3xl font-bold">3</p>
        </div>

        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Borrowed Books</h2>
          <p className="mt-2 text-3xl font-bold">1</p>
        </div>

        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Available Books</h2>
          <p className="mt-2 text-3xl font-bold">2</p>
        </div>
      </div>

      <div className="rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">
          Books Table
        </h2>

        <div className="ag-theme-quartz h-[400px] w-full">
          <AgGridReact<Book>
            rowData={books}
            columnDefs={columns}
            pagination={true}
            paginationPageSize={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;