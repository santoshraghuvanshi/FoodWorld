import { ErrorOutline } from "@mui/icons-material"

function validation(values){
    alert("")
    let error = {}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

    if(values.email === ""){
        error.email="Mail should not Empty";
    }
    if(!email_pattern.test(values.email)){
        error.email="Either mailid or password does not match"
    }
    else{
        error.email=""
    }
    if(values.password ===""){
        error.password="Password Should not Empty";
    }
    else if(!password_pattern.test(values.password)){
        error.password="Either mailid or password does not match";
    }
    else{
        error.password=""
    }

}
export default validation