import { Button, Input } from "antd";


const LoginFormUser = () => {

    const onSubmit = () => {
        
    }

    return(
        <div>
            <h2>Đăng nhập</h2>
            <Input placeholder="username" name="email"/>
            <Input placeholder="password" name="password"/>
            <Button onClick={onSubmit}>Log in</Button>
        </div>        
    );
}

export default LoginFormUser;