import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'

const Users = () => {
  return (
    <Layout>
    <div className='row'>
        <div className='cold-md-3'>
            <AdminMenu/>
        </div>
        <div className='col-md-9'>
        <h1>All Users</h1>
        </div>
        </div>
        </Layout>
  )
}

export default Users