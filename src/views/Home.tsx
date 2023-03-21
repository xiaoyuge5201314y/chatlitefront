import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const Home = (props: any) => {
    const navigate =useNavigate()

    function jumpChatGpt() {
        navigate("/chat")
    }

    return (
        <div>
            <Button type="primary" onClick={jumpChatGpt}>进入chatgpt</Button>
        </div>
    )
}

export default Home