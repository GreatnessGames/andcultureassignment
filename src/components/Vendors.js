import Vendor from './Vendor'
import Loading from './Loading'

const Vendors = ({vendors, isLoading}) => {
    return isLoading ? (
        <Loading />
    ) : (
        <section className='cards'>
            {vendors.map((vendor) => (
                <Vendor key={vendor.id} vendor={vendor}> </Vendor>
            ))}
            </section>
    )
}

export default Vendors

