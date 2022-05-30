import AdminNavbar from "../AdminNavbar/AdminNavbar"


const AdminDashboard = () => {

    return(
        <div>
            <AdminNavbar colors={true}/>
            <h1 style={{paddingTop: "45vh", textAlign: "center", fontSize: "50px"}}>Welcome to AOCD Admin Dashboard</h1>
            {/*<h2 style={{textAlign: "center", fontSize: "40px", color: "#1fa329"}}>Signed in as  </h2>*/}
        </div>
    )
}


export default AdminDashboard;