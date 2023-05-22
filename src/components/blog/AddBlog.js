import { useEffect, useState } from "react";

import axios from "axios"
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Login from "../blog/Login";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";



import { Route, Routes } from "react-router-dom";

import SignUp from "../blog/SignUp";
import EditBlog from "../blog/EditBlog";
import ShowBlogs from "../blog/ShowBlogs";



const AddBlog = () => {

    const [blog_title, setBlog_Title] = useState('');
    const [blog_slug, setBlog_Slug] = useState('');
    const [blog_summary, setBlog_Summary] = useState('');
    const [blog_keyword, setBlog_Keyword] = useState('')
    const [image, setImage] = useState('')
    const [pic, setpic] = useState('')
    const [blog_content, setBlog_Content] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()



      const convertbase64=(e)=>{
        // console.log(e.target.files[0], "received image convert base 64")
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload=()=>{
            setImage(reader.result)
            //  console.log(reader.result , "convert base 64 my image")
        }
        reader.onerror= error=>{
            console.log("error", error)
        }

      }

    //    console.log(image , "received concert")



    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = {};
        if (!blog_title) {
            validationErrors.blog_title = "Please enter the blog title";
        }
        if (!blog_slug) {
            validationErrors.blog_slug = "Please enter the blog slug";
        }
        if (!blog_summary) {
            validationErrors.blog_summary = "Please enter the blog summary";
        }
        if (!blog_keyword) {
            validationErrors.blog_keyword = "Please enter the blog keyword";
        }
        if (!image) {
            validationErrors.image = "Please choose a picture";
        }
        if (!blog_content) {
            validationErrors.blog_content = "Please enter the blog content";
        }

         
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }
        
        setpic(image)

    }

    



    useEffect(() => {
        if (pic) {

            //  fetch("/post-newblog", 
                 fetch("https://wild-gold-bull-sock.cyclic.app/post-newblog", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`

                },
                body: JSON.stringify({
                    blog_title,
                    blog_slug,
                    blog_summary,
                    blog_keyword,
                    pic,
                    blog_content,
                })
            })

                .then(res => res.json())
            setTimeout(() => {
                window.location.href = "/all-blogs"

            }, 1000)


            // .then(output => console.log(output, "final output"))


        }
    }, [pic])

      console.log(pic , "receiveed from usestate pic")

    return <>
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">

                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">

                            {/* all contain here start */}
                            <div className="col-xl">
                                <div className="card mb-4">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">Create Blog Post</h5>
                                        <small className="text-muted float-end">Dellatecnica</small>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="basic-default-fullname">Title</label>
                                                        <input type="text" className="form-control" id="basic-default-fullname" placeholder="The Title for the Blog Post"
                                                            name="blog_title"
                                                            onChange={(e) => setBlog_Title(e.target.value)} />
                                                        {error && !blog_title && <div className="form-text text-danger">Please Enter Blog Title</div>
                                                        }
                                                    </div>

                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="basic-default-company">Slug</label>
                                                        <input type="text" className="form-control" id="basic-default-company" placeholder="The Permalink/Slug for the Blog Post"
                                                            name="blog_slug"
                                                            onChange={(e) => setBlog_Slug(e.target.value)} />
                                                        {error && !blog_slug && <div className="form-text text-danger">Please Enter Blog Slug</div>
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="basic-default-email">Summary</label>
                                                <div className="input-group input-group-merge">
                                                    <textarea id="basic-default-message" className="form-control" placeholder="Short Summary, Used as the Meta Description"
                                                        name="blog_summary"
                                                        onChange={(e) => setBlog_Summary(e.target.value)}
                                                    />

                                                </div>
                                                {error && !blog_summary && <div className="form-text text-danger">Please Enter Blog Summary</div>
                                                }
                                            </div>


                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="basic-default-phone">Keywords</label>
                                                <input type="text" id="basic-default-phone" className="form-control phone-mask" placeholder="Used as Meta Keywords"
                                                    name="blog_keyword"
                                                    onChange={(e) => setBlog_Keyword(e.target.value)}
                                                />
                                                {error && !blog_keyword && <div className="form-text text-danger">Please Enter Blog Keywords</div>
                                                }
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="basic-default-email">Thumbnail</label>
                                                <div className="input-group input-group-merge">
                                                    <input type="file" id="basic-default-email" className="form-control" placeholder="Short Summary,Used as the Meta Description" aria-label="john.doe" aria-describedby="basic-default-email2"
                                                        name="photo"
                                                        // onChange={(e) => setImage(e.target.files[0])}
                                                        onChange={convertbase64}
                                                    />
                                                </div>
                                                {error && !image && <div className="form-text text-danger">Please Choose a Picture</div>
                                                }
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="basic-default-message">Content</label>
                                                <textarea id="basic-default-message" className="form-control"
                                                    name="blog_content"
                                                    onChange={(e) => setBlog_Content(e.target.value)}
                                                />
                                                {error && !blog_content && <div className="form-text text-danger">Please Enter Blog Content</div>
                                                }
                                            </div>
                                            <button type="submit" className="btn btn-primary"
                                                onClick={handleSubmit}
                                            >
                                                Create</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* all contain here end */}
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
}

export default AddBlog;