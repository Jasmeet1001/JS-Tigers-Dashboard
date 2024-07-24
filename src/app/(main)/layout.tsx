import React from 'react'
import Sidebar from './_components/Sidebar'

const MainLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <main className='flex h-full'>
      <Sidebar />

      <div className='flex-1 h-full overflow-y-auto'>
        {children}
      </div>
    </main>
  )
}

export default MainLayout