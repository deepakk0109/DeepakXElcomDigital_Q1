import {Link} from "react-router-dom";
export default function Post({_id,title,summary,amount,receipt,approver,expenseprocess,createdAt,author}) {
  return (
    <div className="post">
      <div className="texts">
      <Link to={`/post/${_id}`}>
        <h3>Name: {title}</h3>
        </Link>
        <p className="summary">Type of reimbursement: {summary}</p>
        <p className="amount">Amount: {amount}</p>
        <p className="approver">Name of approver: {approver}</p>
        <p className="expenseprocess">Expense is processed or not field: {expenseprocess}</p>
      {/* <p className="info">
          <a className="author">Added by Mr. {author.username}</a>
        </p> */}
        
      </div>
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+receipt} alt="Receipt" height="300px" width="350px"/>
        </Link> 
      </div>
  
    </div>
  );
}