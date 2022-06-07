import AppDesignCard from "./AppDesignCard";
import WebDesignCard from "./WebDesignCard";
import GraphicDesignCard from "./GraphicDesignCard";
 
export default function Design(props) {
  return (
    <section className={`design container ${props.className}`}>
      {props.appCard && <AppDesignCard />}
      {props.webCard && <WebDesignCard />}
      {props.graphicCard && <GraphicDesignCard />}
    </section>
  );
}