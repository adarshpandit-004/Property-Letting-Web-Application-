// This component displays a single property's info in card format.
// Props:property: an object containing title, description, location, price, and image_url

export default function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <h3>{property.title}</h3>                       
      <p>{property.description}</p>                  
      <p><strong>Location:</strong> {property.location}</p>  {/* Where it's located */}
      <p><strong>Price:</strong> €{property.price}</p>       {/* Price in Euros */}

      {/* If image is available, display it */}
      {property.image_url && (
        <img src={property.image_url} alt={property.title} />
      )}
    </div>
  );
}
