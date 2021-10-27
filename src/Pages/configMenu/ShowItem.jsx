import React, {useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component';
import {getMenuItem2} from '../../Redux/menuDucks'
import Cookies from 'universal-cookie';
import {
    BrowserRouter as Router,
    useHistory,
    Link,
    useParams
} from "react-router-dom";

const paginationOption = { 
    rowsPerPageText: 'Filas por pagina:', 
    rangeSeparatorText: 'de', 
    noRowsPerPage: false, 
    selectAllRowsItem: true, 
    selectAllRowsItemText: 'Todos' }


const ShowItem = props => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const cookies = new Cookies();
    const token  = cookies.get('token')
    const menuPrincipal = useSelector(store => store.menuPrincipal.array)

    console.log("menutales", menuPrincipal.data.itemMenuPages)

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            dispatch(getMenuItem2(id,token))
          }, 2000);
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
            name: 'Targe',
            selector: 'targe',
            sortable: false
        },
        {
            name: 'Url',
            selector: 'url',
            sortable: false
        },
        {
            name: 'Position',
            selector: 'position',
            sortable: false
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

    
    const editRow = row =>{
        history.push(`/updateMenuItem/${id}/${row}`)
        // console.log("EDITAR",row)
    }

    const deleteRow = row =>{
        console.log("Delete",row)
    }

    return (
        <div>
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                <div className="contentBtn">
                    <Link type="button" to={`/createMenuItem/${id}`} className="btn btn-primary">Agregar Item</Link>
                </div>
                
                <div>
                    <h6 className="border-bottom pb-2 mb-0">Items del menu principal</h6>
                    
                </div>
                <div className="table-responsive">
                {
                    menuPrincipal.data.itemMenuPages && menuPrincipal.data.itemMenuPages.length > 0 ?(<DataTable 
                        columns={columns}
                        data={menuPrincipal.data.itemMenuPages}
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

export default ShowItem
