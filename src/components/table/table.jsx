import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import {
  useTable,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';

// ----------------------------------------------------------------------

export default function ReusableTable({
  title,
  tableData,
  tableColumns,
  defaultDense = false,
  defaultRowsPerPage = 5,
  defaultOrderBy = 'name',
  defaultOrder = 'asc',
  defaultCurrentPage = 0,
  onSelectRow,
  onDeleteRow,
  onViewRow,
  sx,
}) {
  const table = useTable({
    defaultDense,
    defaultRowsPerPage,
    defaultOrderBy,
    defaultOrder,
    defaultCurrentPage,
  });

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    selected,
    onSelectAllRows,
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = table;

  const denseHeight = dense ? 52 : 72;

  return (
    <div>
      {selected.length > 0 && (
        <TableSelectedAction
          dense={dense}
          numSelected={selected.length}
          rowCount={tableData.length}
          onSelectAllRows={(checked) =>
            onSelectAllRows(
              checked,
              tableData.map((row) => row.id)
            )
          }
          action={
            <Stack direction="row" spacing={1.5}>
              {onDeleteRow && (
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={onDeleteRow}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          }
        />
      )}

      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <Scrollbar>
          <Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 800, ...sx }}>
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={tableColumns}
              rowCount={tableData.length}
              numSelected={selected.length}
              onSort={onSort}
              onSelectAllRows={
                onSelectRow
                  ? (checked) =>
                      onSelectAllRows(
                        checked,
                        tableData.map((row) => row.id)
                      )
                  : null
              }
            />

            <TableBody>
              {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  onClick={() => onViewRow?.(row.id)}
                  sx={{ cursor: onViewRow ? 'pointer' : 'default' }}
                >
                  {onSelectRow && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.includes(row.id)}
                        onClick={(event) => event.stopPropagation()}
                        onChange={(event) => onSelectRow(event.target.checked, row.id)}
                      />
                    </TableCell>
                  )}

                  {tableColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align || 'left'}
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      {column.renderCell ? column.renderCell(row) : row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              <TableEmptyRows
                height={denseHeight}
                emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
              />

              <TableNoData notFound={!tableData.length} />
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <TablePaginationCustom
        count={tableData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
        dense={dense}
        onChangeDense={onChangeDense}
      />
    </div>
  );
}

// ReusableTable.propTypes = {
//   title: PropTypes.string,
//   tableData: PropTypes.array.isRequired,
//   tableColumns: PropTypes.array.isRequired,
//   defaultDense: PropTypes.bool,
//   defaultRowsPerPage: PropTypes.number,
//   defaultOrderBy: PropTypes.string,
//   defaultOrder: PropTypes.oneOf(['asc', 'desc']),
//   defaultCurrentPage: PropTypes.number,
//   onSelectRow: PropTypes.func,
//   onDeleteRow: PropTypes.func,
//   onViewRow: PropTypes.func,
//   sx: PropTypes.object,
// };
