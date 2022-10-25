import BookProp from "../@types/book";

interface Prop {
    data: BookProp,
    onHandleclose: any
}

export default function BookDetail({data, onHandleclose}:Prop) {
    let yearPublishing = data.publishedDate.split('-')[0];

    function handleClose() {
        onHandleclose(false);
    }

    return(
        <div className='
            z-10 fixed bg-[#7082C3] text-white font-sans font-normal
            flex-col items-center p-2 m-5 text-center justify-between overflow-y-auto scroll-m-2 max-h-[90%]
            min-[1024px]:flex min-[1024px]:flex-row min-[1024px]:w-4/5 min-[1024px]:p-8
        '>
            <div className="flex flex-col min-w-[50%] justify-between">
                <div className="flex flex-col">
                    <span className="mb-2 font-title font-bold text-3xl w-[100%]">{ data.title }</span>
                    <p className="text-2xl ml-5 font-normal">
                        Por <span className="text-[#060E50] font-bold">{ data.authors.join(', ') }</span> - <span className="text-[#060E50] font-bold">{ yearPublishing }</span>
                    </p>
                </div>
                <div className="flex flex-col mr-5">
                    <div className="flex flex-row justify-between pb-2 pr-6 mt-6 border-b-2 border-b-white">
                    <span className="text-lg font-bold">Numero de paginas</span>
                    <span className="text-lg font-normal">{ data.pageCount }</span>
                    </div>
                    <div className="flex flex-row justify-between pb-2 pr-6 mt-6 border-b-2 border-b-white">
                    <span className="text-lg font-bold">Editora</span>
                    <span className="text-lg font-normal">{ data.publisher }</span>
                    </div>
                    <div className="flex flex-row justify-between pb-2 pr-6 mt-6 border-b-2 border-b-white">
                    <span className="text-lg font-bold">Publicação</span>
                    <span className="text-lg font-normal">{ data.publishedDate }</span>
                    </div>
                </div>
                <div className="flex flex-row mt-10 justify-center items-center">
                    <a href={data.infoLink} target="_blank"
                        className="bg-white font-bold text-[#7082C3] text-sm rounded-lg shadow-button h-10 w-[150px] mr-4 hover:shadow-press text-center flex items-center justify-center">
                        Saiba mais
                    </a>
                    <button 
                        onClick={handleClose}
                        className="bg-white font-bold text-[#7082C3] text-sm rounded-lg shadow-button h-10 w-[150px] ml-4 hover:shadow-press">
                        Buscar outro livro
                    </button>
                </div>
            </div>
            <div className="bg-white p-3 shadow-input mt-5 max-h-[380px] min-[1024px]:mt-0">
                <p className="
                    font-sans font-normal text-black text-lg break-words text-ellipsis overflow-y-auto scroll-m-0
                    min-[1024px]:max-h-[360px]
                ">{ data.description }</p>
            </div>
        </div>
    )
}