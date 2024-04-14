import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from "../Editor";

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  // const [content,setContent] = useState('');
  const [amount,setAmount]=useState('');
  const [files, setFiles] = useState('');
  const [approver,setApprover]=useState('');
  const[expenseprocess,setExpenseprocess]=useState('');
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    // data.set('content', content);
    data.set('amount',amount);
    data.set('file', files[0]);
    data.set('approver',approver);
    data.set('expenseprocess',expenseprocess);
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    
    <form onSubmit={createNewPost}>
      <br></br>
      <input type="title"
             placeholder={'Name'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Type of reimbursement'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <input type="number" placeholder={'Amount'} value={amount} onChange={ev=>setAmount(ev.target.value)} />
      <span>Receipt of the bill:</span>
      <input type="file" placeholder={'Receipt of the bill'} onChange={ev => setFiles(ev.target.files)} />
      <input type="approver" placeholder={'Name of the approver'} value={approver} onChange={ev=>setApprover(ev.target.value)}/>
      <input type="expenseprocess" placeholder={'If the expense is processed or not field'} value={expenseprocess} onChange={ev=>setExpenseprocess(ev.target.value)}/>

      
      {/* <Editor value={content} onChange={setContent} /> */}
      <button style={{marginTop:'5px'}}>Submit</button>
      <br/>
      <br/>
    </form>
  );
}