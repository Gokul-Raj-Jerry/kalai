import React from 'react';
import {Link} from 'react-router-dom'
import VideoModal from '../ModalVideo/VideoModal'
import blogs from '../../api/blogs'

const ClickHandler = () =>{
    window.scrollTo(10, 0);
 }

const BlogList = (props) => {
    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            {blogs.map((blog, bitem) => (
                                <div className={`post  ${blog.blClass}`}key={bitem}>
                                    <div className="entry-media video-holder">
                                        <img src={blog.blogSingleImg} alt=""/>
                                        <VideoModal/>
                                    </div>
                                    <div className="entry-meta">
                                        {/* <ul>
                                            <li><i className="fi flaticon-user"></i> By <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.authorTitle}</Link> </li>
                                            <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments {blog.comment} </li>
                                            <li><i className="fi flaticon-calendar"></i> {blog.create_at}</li>
                                        </ul> */}
                                    </div>
                                    <div className="entry-details">
                                        <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

     )
        
}

export default BlogList;
