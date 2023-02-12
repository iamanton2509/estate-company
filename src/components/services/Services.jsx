import './services.css';

const Services = ({img, title, description}) => {
    return (
        <div className="service-card">
            <img className="services-card__image" src={img} /> 
            <h3 className="service-card__title">{title}</h3>  
            <p>{description}</p>
        </div>
    );
}

export default Services;