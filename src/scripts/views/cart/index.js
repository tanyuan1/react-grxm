
//Cart界面
import "./index.scss" ;
import { Head } from "../../components/head";
export class Cart extends Component{
    render(){
        return(
            <div>
                <Head title="购物车" show={true}/>
                <h2>cart界面------------------------</h2>
            </div>
        )
    }
}