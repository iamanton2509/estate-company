import {useGetServicesQuery} from '../../store/servicesApi';
import Loader from './../UI/loader/Loader';
import Services from './Services';

const ServiceList = () => {
    const {data = [], isLoading} = useGetServicesQuery();
    console.log(data);
    if (isLoading) return Loader;
    return (
        <section className="services">
            <div className="container">
            <h2 className="services-title">Why choose us?</h2>
                <div className="services-container">  
                    <div className="services-row">
                        {data.map((service) =>
                            <Services 
                                key={service.id} 
                                img={service.img} 
                                title={service.title} 
                                description={service.description} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceList;