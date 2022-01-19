import MapContainer from './MapContainer'

const Vendor = ({ vendor }) => {
    return (
      console.log(vendor),
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
          <h1>{vendor.name}</h1>
          <MapContainer lat={vendor.latitude} lon={vendor.longitude} title={vendor.name} />
          </div>
          <div className='card-back'>
            <h1>{vendor.name}</h1>
            <ul>
              <li>
                <strong>Type:</strong> {vendor.brewery_type}
              </li>
              <li>
                <strong>Street:</strong> {vendor.street}
              </li>
              <li>
                <strong>City:</strong> {vendor.city}
              </li>
              <li>
                <strong>State:</strong> {vendor.state}
              </li>
              <li>
                <strong>Zip:</strong> {vendor.postal_code}
              </li>
              <li>
                <strong>URL:</strong> <a href={vendor.website_url}>{vendor.website_url}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

export default Vendor
