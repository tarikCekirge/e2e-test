import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <main className='w-full h-dvh flex justify-center items-center flex-col bg-slate-50'>
            <Outlet />
        </main>
    )
}

export default RootLayout