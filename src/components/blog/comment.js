import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"
import Footer from "../footer/footer"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Audio, Grid, Oval } from 'react-loader-spinner'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from "axios"

const Comment = () => {

    const [isloading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [admin_approved, setadmin_Approved] = useState(null)

    const [error, setError] = useState(false)



    useEffect(() => {
        getComments()
    }, [])


    const getComments = async () => {

        let result = await axios({
            method: "get",
            url: "https://wild-gold-bull-sock.cyclic.app/comment-list"

        }).then((res) => {
            setData(res.data)
        }).catch((err) => {
            setError(error)

        })


    }

  console.log(data, "received comments from useState")



    const handleApprovedComment = async (id) => {
        const newStatus = data.find(comment => comment._id === id).admin_approved === "yes" ? "no" : "yes";

        try {
            await axios.post(`https://wild-gold-bull-sock.cyclic.app/update-comment/${id}`, {
                admin_approved: newStatus,
            });
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    



    }


    const handleReject = async (id) => {
        
      const newStatus = data.find(comment => comment._id === id).admin_approved === "yes" ? "no" : "yes";

        try {
            await axios.post(`https://wild-gold-bull-sock.cyclic.app/update-comment/${id}`, {
                admin_approved: newStatus,
            });
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    
 }







    return (

        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    <Sidebar />



                    <div className="layout-page">

                        <Navbar />



                        <div className="content-wrapper">


                            <div className="container-xxl flex-grow-1 container-p-y">
                                {/* Here contain start */}
                                {isloading ? (<Oval
                                    height={80}
                                    width={80}
                                    color="#D4AF37"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#D4AF37"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}

                                />
                                ) : (

                                    <div className="card">
                                        <div className="table-responsive text-nowrap table-bordered">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Sr. No.</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Message</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                {data.length > 0 && data.map((elem, index) => {
                                                    return (
                                                        <tbody className="table-border-bottom-0" key={index}>
                                                            <tr>
                                                                <td>{index + 1}</td>

                                                                <td>{elem.client_name}</td>
                                                                <td>{elem.client_email}</td>
                                                                <td>{elem.client_message}</td>

                                                                <td>
                                                                    {elem.admin_approved === "yes" ? (
                                                                        <span className="badge bg-success me-1"
                                                                            onClick={() => handleReject(elem._id)} style={{cursor: "pointer"}}>Active</span>
                                                                    ) : (
                                                                        <span className="badge bg-primary text-white me-1" onClick={() => handleApprovedComment(elem._id)}>Inactive</span>
                                                                    )}

                                                                </td>



                                                                <td>
                                                                    <DeleteModal
                                                                        id={elem._id}
                                                                        refetch={getComments}

                                                                    />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })}
                                            </table>

                                        </div>
                                    </div>
                                )}
                                {/* Here contain end */}
                            </div>

                            <Footer />


                            <div className="content-backdrop fade"></div>
                        </div>
                        {/* <!-- Content wrapper --> */}
                    </div>
                    {/* <!-- / Layout page --> */}
                </div>

                {/* <!-- Overlay --> */}
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </>
    )

}

export default Comment



const DeleteModal = (props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const handleDelete = async () => {

        let api = await axios({
            method: "delete",
            url: (`https://wild-gold-bull-sock.cyclic.app/delete-comment/${props.id}`),
            // headers:{
            //     authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            //  }

        })
        props.refetch()

        onCloseModal()


    }



    return (
        <>
            <button className="btn btn-sm btn-danger" onClick={onOpenModal}>Delete</button>
            <Modal open={open} center onClose={onCloseModal}>
                <br></br>
                <h2>Are you sure you want to delete ?</h2>
                <button className="btn btn-sm btn-danger" onClick={handleDelete}>Yes</button>
                <button className="btn btn-sm btn-primary" onClick={onCloseModal}>No</button>
            </Modal>
        </>
    )
}

