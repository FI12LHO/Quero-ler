import { useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import BookDetail from './components/bookDetail';
import BookProp from './@types/book';
import DefaultData from './utils/defaultBookData';

function App() {
  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState<BookProp>(DefaultData);
  const [open, setOpen] = useState(false);
  const popupStyle = 'fixed z-10 bg-[#00000060] w-screen h-screen flex';


  function handleClosePopup() {
    setOpen(false);
  }

  async function getBook() {
    if (search === '' || search === ' ') {
      return null
    }

    let bookTitle = search.replaceAll(' ', '+');

    const result:BookProp = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`)
     .then(res => res.json())
     .then(res => res.items)
     .then(res => res[0].volumeInfo);

    // Armazenando resultado da pesquisa
    setBookData(result);
    // Abrindo Popup com resultado da pesquisa
    setOpen(true);
    // Limpando campo de pesquisa (input)
    setSearch('');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center justify-center flex-col">
        <span className="text-white font-bold text-6xl font-title uppercase mb-3">Quero ler</span>
        <span className="text-white font-bold text-2xl font-sans">Procure pela sua proxima leitura</span>
      </div>
      <div className="flex items-center justify-center mt-14">
        <input 
          className='
          rounded-3xl bg-white min-w-[300px] min-h-[60px] p-1 mr-5 text-center shadow-input border-spacing-2 border-[#93A7ED] placeholder:text-[#93A7ED]
          focus:outline-none focus:border-none focus:placeholder:text-[#93a6ed49]
          capitalize
          '
          placeholder='Volta ao mundo em 80 dias' 
          value={search} onChange={(e) => { setSearch(e.target.value) }} 
        />
        <button 
          className="rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-button hover:shadow-press"
          onClick={getBook}
        >
          <MagnifyingGlass size={32} className="text-[#7082C3] hover:rotate-90 duration-300" />
        </button>
      </div>
      
      <div className={open ? popupStyle : `${popupStyle} hidden`}>
        <span className="w-screen h-screen" onClick={handleClosePopup}></span>
        <BookDetail data={bookData} onHandleclose={setOpen} />
      </div>
    </div>
  );
}

export default App;
