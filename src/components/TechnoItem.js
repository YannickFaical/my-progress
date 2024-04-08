export default function technoItem(props){
const {techno,handleDeleteTechno} =props;
    return (
        <div key={techno.technoid} className="card">
        <h2>{techno.technoname}</h2>
        <h3>Category</h3>
        <p>{techno.technocategory}</p>
        <h3> description</h3>
        <p>{techno.technodescription}</p>
        <div className="footer">
            <button className="btn-delete" onClick={() => handleDeleteTechno(techno.technoid)}>delete</button>
        </div>
     </div>
    )





}