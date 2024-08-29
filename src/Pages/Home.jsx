
import { Toaster } from 'react-hot-toast'
import AppBar from '../Components/Appbar'
import { useEffect, useState } from 'react'
import { useAxios } from '../Hooks/useAxios'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../Redux/Actions'
import Cards from '../Components/Cards'

function Home() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const [refresh,setRefresh] = useState(false)
    useEffect(() => {
        useAxios().get('products').then(res => {
            dispatch({type:ACTIONS.GETDATA,payload:res.data.splice(0,21)})
        })
    },[refresh])
    
    return (
        <div >
            <Toaster position="top-right" reverseOrder={false} />
             <AppBar refresh={refresh} setRefresh={setRefresh}/>
            <ul className='list-none flex flex-wrap justify-center px-[104px] mt-[50px] mb-[50px] gap-[100px]'>
                {products.map(item => (
                    <li key={item.id}>
                        <Cards item={item}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
