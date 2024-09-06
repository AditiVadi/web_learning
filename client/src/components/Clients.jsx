import { clients } from "../constants";
import { useEffect } from "react";

const Clients = () => {
    useEffect(() => {
      const clientElements = document.querySelectorAll('.client-logo');
      clientElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
      });
    }, []);
  
    return (
      <section className="flex justify-center my-4">
        <div className="flex justify-center flex-wrap w-full">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex-1 flex justify-center sm:min-w-[192px] min-w-[120px] m-5"
            >
              <img
                src={client.logo}
                alt="client_logo"
                className="sm:w-[192px] w-[100px] object-contain client-logo "
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Clients;
