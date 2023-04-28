import "./index.css";
import SearchBar from "./SearchBar";

const SearchComponent = () => {
    return(
        <>
            <SearchBar />
            <br></br>
            <div className="card">
                <img className="card-img-top" src="/images/bible.jpg" alt="" width={0}/>
                <div className="card-img-overlay card-inverse d-flex flex-column justify-content-end">
                    <h4 className="text-white text-bold">
                        Find your favorite Hymn!
                    </h4>
                </div>
        </div>
            <div className="linebelow linespace">
            <a href="home" title="Verse of the Day">
                <h3 class="vvod subhead" itemprop="headline">Verse of the Day</h3>
                </a>
                <em class="vod red linespace">for Friday, April 28, 2023</em>
            </div>
      

        </>
    )
};
export default SearchComponent;