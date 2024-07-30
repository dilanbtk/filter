import {useState , useEffect} from 'react'
import List from './List';
import Form from './Form';

function   Contacts() {
    const [contacts, setContacts] = useState([{
        fullname: 'John Doe',
        phone_number: '123456789'

    },
    {
        fullname: 'Janee',
        phone_number: '987654321'
      },
      {
        fullname: 'cloe',
        phone_number: '987654321' 
      },]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);




  return (
    <div>
        
        <List contacts={contacts}/>
      
        <Form  addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;