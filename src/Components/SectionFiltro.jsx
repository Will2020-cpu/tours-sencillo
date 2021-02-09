import React from 'react'
import CardSection from './CardSection'
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import LocalLaundryServiceOutlinedIcon from '@material-ui/icons/LocalLaundryServiceOutlined';

const SectionFiltro = () => {
    return (
        <>
            <div className="mt-20 m-auto w-10/12">
                <div className="mb-10">
                    <h1 className="text-center text-gray-600 md:text-3xl lg:text-3xl font-medium">Todo lo que ofrece nuestro hostel</h1>
                </div>
                <div className="grid lg:grid-cols-8 md:grid-cols-3 gap-2">
                    <CardSection icon={<FreeBreakfastOutlinedIcon fontSize='large' />} title="cafe" />
                    <CardSection icon={<RestaurantOutlinedIcon  fontSize='large' />} title="Restaurante" />
                    <CardSection icon={<WifiOutlinedIcon fontSize='large' />} title="wifi" />
                    <CardSection icon={<TvOutlinedIcon  fontSize='large' />} title="Tv por cable" />
                    <CardSection icon={<LocalLaundryServiceOutlinedIcon  fontSize='large' />} title="lavanderia" />
                </div>
            </div>
        </>
    )
}

export default SectionFiltro
