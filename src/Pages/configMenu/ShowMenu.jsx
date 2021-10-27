import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import DataTable from 'react-data-table-component';
import {getMenu} from '../../Redux/menuDucks'
import {
    BrowserRouter as Router,
    useHistory,
    Link,
    useParams
} from "react-router-dom";
import '../configMenu/CreateMenu.css'


const paginationOption = { 
    rowsPerPageText: 'Filas por pagina:', 
    rangeSeparatorText: 'de', 
    noRowsPerPage: false, 
    selectAllRowsItem: true, 
    selectAllRowsItemText: 'Todos' }

const ShowMenu = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const menuPrincipal = useSelector(store => store.menuPrincipal.array)
    const [pending, setPending] = React.useState(true);


    console.log("menu", menuPrincipal)

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            dispatch(getMenu())
          }, 1000);
          return () => clearTimeout(timeout);
    }, [])

    const columns = [
        {
            name:'Nombre',
            selector:'name',
            sortable: true,
        },
        {
            name: 'Descripcion',
            selector: 'description',
            sortable: false
        },
        {
            name: 'Path',
            selector: 'path',
            sortable: false
        },
        {
            name: 'Position',
            selector: 'position',
            sortable: false
        },
        {
            cell: row => <button className="btn btn-success btn-circle btn-sm btnColor" type="button" onClick={() => addRow(row.id)} title="Agregar Item"><i className="fas fa-plus-square fa-sm btnColor"></i></button>,
            button: true,
            width: '40px',
            ignoreRowClick: true,
            allowOverflow: false,
        },
        {
            cell: row => <button className="btn btn-primary btn-circle btn-sm btnColor" type="button" onClick={() => editRow(row.id)} title="Editar"><i className="fas fa-edit fa-sm btnColor"></i></button>,
            button: true,
            width: '40px',
            ignoreRowClick: true,
            allowOverflow: false,
        },
        {
            cell: row => <button className="btn btn-danger btn-circle btn-sm btnColor" type="button" onClick={() => deleteRow(row.id) } title="Borrar"><i className="fas fa-trash fa-sm btnColor"></i></button>,
            button: true,
            width: '40px',
        },
       
    ]

    const addRow = row =>{
        history.push(`/ShowItem/${row}`)
        console.log("EDITAR",row)
    }

    const editRow = row =>{
        history.push(`/updateMenu/${row}`)
        // console.log("EDITAR",row)
    }

    const deleteRow = row =>{
        console.log("Delete",row)
    }

    return (
        <div>
            <div class="my-3 p-3 bg-body rounded shadow-sm">
                <div className="contentBtn">
                    <Link type="button" to={`/createMenu`} class="btn btn-primary">Agregar Menu</Link>
                </div>
                
                <div>
                    <h6 className="border-bottom pb-2 mb-0">Lista de menu</h6>
                    
                </div>
                <div className="table-responsive">
                {
                    menuPrincipal.data && menuPrincipal.data.length > 0 ?(<DataTable 
                        columns={columns}
                        data={menuPrincipal.data}
                        pagination
                        paginationComponentOptions={paginationOption}
                        fixedHeader
                        fixedHeaderScrollHeight="600px"
                        progressComponent={<h3>Cargando...</h3>}
                    />):''

                }
                </div>

              
            </div>
        </div>
    )
}

export default ShowMenu
