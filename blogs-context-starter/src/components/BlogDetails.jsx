import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[40px] mb-[10px]  justify-center items-center'>
      <NavLink to={`/blog/${post.id}`} >
        <span className="font-bold text-lg ">{post.title}</span>
      </NavLink>
      <p>
        By
        <span className='italic'>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='underline font-bold'>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-sm mt-[4px]'> Posted on {post.date} </p>
      <p className='text-md mt-[14px]'> {post.content}</p>
      <div className='flex gap-x-3'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className="text-blue-700 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
