import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

function BackToHome() {
    const navigate = useNavigate();
    function handleNavigateToHome() {
        navigate("/")
    }
    return (
        <div>
            <Button onClick={handleNavigateToHome} className="bg-blue-600 text-white" variant="outline">{"< "} Back to Home</Button>
            
        </div>
    )
}

export default BackToHome
