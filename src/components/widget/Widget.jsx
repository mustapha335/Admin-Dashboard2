import "./widget.scss"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widgets = ({type}) => {
 let data;

 //temporary
 const amount = 100;
 const diff = 20;

 switch(type){
  case "user":
    data={
      title:"USERS",
      isMoney:"false",
      link:"See all users",
      icon:   <PersonOutlinedIcon className="icon"  style={{
        color: "crimson",
  
      }}/>,
    }
    break;
    case "order":
      data={
        title:"ORDERS",
        isMoney:"false",
        link:"View all orders",
        icon:   <ShoppingCartOutlinedIcon className="icon"  style={{
          
          color: "rgb(81, 85, 126)",
        }}/>,
      }
      break;
      case "earnings":
        data={
          title:"EARNINGS",
          isMoney:"true",
          link:"View net earnings",
          icon:   <MonetizationOnOutlinedIcon className="icon" 
            style={{  color: "green" }}/>,
        }
        break;
        case "balance":
          data={
            title:"BALANCE",
            isMoney:"true",
            link:"See details",
            icon:   <AccountBalanceWalletOutlinedIcon className="icon"     style={{
            
              color: "purple",
            }}/>,
          }
          break;
          default:
            break;
 }

  return (
    <div className="widget">
      <div className="left">
        <span className="title"> {data.title}</span>
          <span className="counter">{data.isMoney && "£"}{amount}</span>
          <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
          </div>
           {data.icon}
      </div>
      </div>
  )
}

export default Widgets