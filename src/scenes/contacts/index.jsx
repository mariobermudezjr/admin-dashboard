import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'
import { useTheme } from '@mui/material'

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'age', headerName: 'Age', headerAlign: 'left', align: 'left' },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'zipCode', headerName: 'Zip Code', flex: 1 },
  ]

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference." />
      <Box
        m="40px 0 0 0 "
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor:
              theme.palette.mode === 'dark' ? colors.blueAccent[700] : colors.blueAccent[800],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          },
          '& .css-1k9t3j4 , .css-j85fv7, .css-av820f, .css-36s658': {
            margin: '0',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor:
              theme.palette.mode === 'dark' ? colors.blueAccent[700] : colors.blueAccent[800],
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  )
}

export default Team