import { UserOutlined,ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Table, Modal } from "antd";
import { TableCustom, Avatar, ButtonAction } from './styles';
const {confirm} = Modal;


const TableUsers = ({users, onDelete, onEdit, loading}) => {
    const showConfirm = (id) => {
        confirm({
          title: 'Bạn có muốn xóa cuốn sách này ?',
          icon: <ExclamationCircleFilled />,
          content: 'Dữ liệu sẽ mất vĩnh viễn',
          onOk() {
            onDelete(id)
          },
          onCancel() {
          },
        });
      };

    const columns =[
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text,item) =>{
                return(
                    <p>{text.toString() === "true"?"Active":"Inactive"}</p>
                )
            }
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (_,item) =>{
                return(
                    <Avatar src={item.avatar}/>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_,item) =>{
                return(
                    <div>
                        <ButtonAction act={"edit"} onClick={()=>{onEdit(item.id)}}>Edit</ButtonAction>
                        <ButtonAction act={"delete"} onClick={()=>{showConfirm(item.id)}}>Delete</ButtonAction>
                    </div>
                )
            }
        },
    ]

    return(
        <TableCustom columns={columns} dataSource={users} loading={loading}/>
    )
}

export default TableUsers;