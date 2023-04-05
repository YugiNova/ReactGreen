import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { Role, User, UserInfo, Username } from './styles';

const AuthUser = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        navigate(`/`)
    }


    const items = [
        {
          label: (
              <div>
                <a onClick={logout}>
                    Log out
                </a>
              </div>
          ),
          key: '0',
        }
      ];


    return(
        <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
            <UserInfo>
              <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/81216470_1397566567082422_1593114468005445632_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-UnEOZEV3KoAX_UOx9L&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfAk-V7fD3839G8vyFF-y60O2XK3WvzwQqB5fz5sZ_yGiA&oe=6454AF33"/>
              <div>
                <Role>Admin</Role>
                <Username>Yugi Nova</Username>
              </div>
            </UserInfo>
        </a>
      </Dropdown>
    );
}

export default AuthUser;