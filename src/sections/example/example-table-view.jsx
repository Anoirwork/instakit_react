import ReusableTable from 'src/components/table/table';

// ----------------------------------------------------------------------

const TABLE_COLUMNS = [
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'email', label: 'Email', align: 'left' },
  {
    id: 'status',
    label: 'Status',
    align: 'center',
    renderCell: (row) => <a color={row.status === 'active' ? 'success' : 'error'}>{row.status}</a>,
  },
  { id: 'role', label: 'Role', align: 'center' },
];

const TABLE_DATA = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', role: 'User' },
  // ... more data
];

export default function ExampleTableView() {
  const handleSelectRow = (checked, id) => {
    console.log('Selected:', checked, id);
  };

  const handleDeleteRow = (id) => {
    console.log('Delete:', id);
  };

  const handleViewRow = (id) => {
    console.log('View:', id);
  };

  return (
    <ReusableTable
      tableData={TABLE_DATA}
      tableColumns={TABLE_COLUMNS}
      onSelectRow={handleSelectRow}
      onDeleteRow={handleDeleteRow}
      onViewRow={handleViewRow}
      defaultOrderBy="name"
      defaultRowsPerPage={5}
    />
  );
}
