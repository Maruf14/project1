import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Card(props) {
    const state = props;
    return <div className="card bg-dark shadow rounded text-white text-center py-4 px-3">
        <FontAwesomeIcon icon={state.icon} className="icon my-4" />
        <h6 className="pb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime sit dicta placeat libero aliquam sequi? Rem itaque, iste ullam voluptates beatae rerum, porro cupiditate aut!</h6>
        <img src={state.img} className="logo rounded-circle mb-3" alt="" />
        <p className=" pb-4">{state.title}</p>
    </div>
}


export default Card;