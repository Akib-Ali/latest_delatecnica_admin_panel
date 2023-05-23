import React, { useState, useEffect } from "react"
import axios from "axios"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import SignUp from "../blog/SignUp";
import Login from "../blog/Login";
import Footer from "../footer/footer";
import AddBlog from "../blog/AddBlog";
import EditBlog from "../blog/EditBlog";
import { Audio, Grid, Oval } from 'react-loader-spinner'



const ShowBlogs = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isloading, setLoading] = useState(false)


    useEffect(() => {
        getData()
        setLoading(true)
    }, [])
    const getData = async () => {
        const data = await axios({
            method: "get",
            //  url: "/blog-list",
              url: "https://wild-gold-bull-sock.cyclic.app/blog-list",
             headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
             }
            
        }).then((res) => {
            setData(res.data)
            setLoading(false)
            // console.log(res.data)
        }).catch((err) => {
            setError(err)
        })
}

   console.log(data, "data receiv")
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
                                                        <th>Image</th>
                                                        <th>Title</th>
                                                        <th>Slug</th>
                                                        <th>Keywords</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                {data.length > 0 && data.map((elem, index) => {
                                                    return (
                                                        <tbody className="table-border-bottom-0" key={index}>
                                                            <tr>
                                                                <td>{index + 1}</td>
                                                                <td><img src={elem.pic} height="100px" width="150px" /></td>
                                                                <td>{elem.blog_title}</td>
                                                                <td>{elem.blog_slug}</td>
                                                                <td>{elem.blog_keyword}</td>
                                                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                                                <td>
                                                                    <Link to={`/edit-blog/${elem._id}`}>
                                                                        <button className="btn btn-sm btn-primary">Edit</button>
                                                                    </Link>

                                                                    {/* <DeleteModal id={elem._id} fetchapi={fetchapi} /> */}
                                                                    <DeleteModal
                                                                        id={elem._id}
                                                                        refetch={getData}
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


export default ShowBlogs



const DeleteModal = (props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const handleDelete = async () => {

        let api = await axios({
            method:"delete",
             url:(`https://wild-gold-bull-sock.cyclic.app/delete-blog/${props.id}`),
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
             }
           
          })
          props.refetch()
         
          onCloseModal()


    }



    return (
        <>
            <button className="btn btn-sm btn-danger" onClick={onOpenModal}>Delete</button>
            <Modal open={open} center onClose={onCloseModal}>
                <br></br>
                <h2>Are you sure you want to delete?</h2>
                <button className="btn btn-sm btn-danger" onClick={handleDelete}>Yes</button>
                <button className="btn btn-sm btn-primary" onClick={onCloseModal}>No</button>
            </Modal>
        </>
    )
}

