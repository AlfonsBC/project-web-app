import "./index.css";

const HomeComponent = () => {
    return(
        <>
        <div className="card">
                <img className="card-img-top" src="/images/co.jpg" alt="" width={0}/>
                <div className="card-img-overlay card-inverse d-flex flex-column justify-content-end">
                    <h4 className="text-white text-bold">
                        Holy is the Lord of Hosts!
                    </h4>
                    <span className="text-white text-bold">The whole earth is full of his glory...</span>
                </div>
        </div>
        <br></br>
        <div class="card">
  <div class="card-header">
     Bible verse of today:
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Fear not, little flock; for it is your Father's good pleasure to give you the kingdom.</p>
      <footer class="blockquote-footer">Jesus Christ <cite title="Source Title"> - Luke 12:32</cite></footer>
    </blockquote>
  </div>
</div>
<br></br>

        </>
    )
};
export default HomeComponent;