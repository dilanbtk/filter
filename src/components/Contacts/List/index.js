import {useState} from 'react'
import './style.css';
//kayıtlı kişileri listelemek için
function List({contacts}) {
  const [filterText, setFilterText] = useState('');
  const filteredContacts = contacts.filter((item) => {
     //filter metodu ile filtreleme işlemi yapılıyor  ve item değişkenine atılıyor      
    return Object.keys(item).some((key) => 
    //Object.keys(item) ile item değişkenindeki key değerlerini diziye atıyoruz ve some metodu ile dizi içindeki her bir eleman için bir işlem yapılıyor
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
      //item[key] ile item değişkenindeki key değerlerini alıyoruz ve toString ile stringe çeviriyoruz ve toLowerCase ile küçük harfe çeviriyoruz ve includes ile filterText değişkenindeki değeri içerip içermediğini kontrol ediyoruz
    )
  })




  return (
    <div id ="container">
       <h1>Contacts</h1>
      <input placeholder='Filter contacts...' value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>
      <ul className='list'>
        {
          filteredContacts.map((contact, i) => (
            <li key={i}>
              <span>{contact.fullname}</span>
              <span style={{marginLeft: '10px'}}>{contact.phone_number}</span>
              </li>
          ))}
      </ul>
      <p> Total contacts({filteredContacts.length}) </p>
    </div>
  )
}

export default List;