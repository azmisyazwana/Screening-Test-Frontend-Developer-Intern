import React, { useEffect, useState } from 'react'
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import './Comment.css'

const Comment = ({ comments, upvote, downvote }) => {
    const convertDate = (date) => {
        return moment(date).utc().format("D MMMM YYYY HH:mm")
    }

    // const[point, setPoint] = useState(null)
    // const[pointReply, setPointReply] = useState(null)

    // const [isVoted, setIsVoted] = useState(true)
    // const upvote = (point) => {
    //     // if(!isVoted){
    //         console.log("tes")
    //         setPoint(point + 1)
    //         setIsVoted(true)
    //     // }
    // }


    // const downvote = (point) => {
    //     // if(!isVoted){
    //         console.log("tes2")
    //         setPoint(point - 1)
    //         setIsVoted(true)
    //     // }
    // }
    // useEffect(()=> {
    //     comments.map((comment)=>{
    //         setPoint(comment.point)
    //         console.log('tes')
    //         comment.replies.map((reply) => {
    //             setPointReply(reply.point)
    //         })
    //     })
    //     console.log(point)
    //     console.log(pointReply)

    // }, [point, pointReply])

    const [isVoted, setIsVoted] = useState(false)
    const [isActiveUp, setIsActiveUp] = useState(false)
    const [isActiveDown, setIsActiveDown] = useState(false)


    const handleClickUp = () => {
        if(!isVoted){
            setIsActiveUp(true);
        }
        setIsVoted(true)
      };

      const handleClickDown = () => {
        if(!isVoted){
            setIsActiveDown(true);
        }
        setIsVoted(true)
      };


    return (
        <div>
            {comments.map(comment => 
                (<div className='comment' key={comment.id}>
                <div className='image'>
                    <img src={comment.avatar} />
                </div>
                <div className='comment-content'>
                    <h4 className='name-user'>{comment.author}</h4>
                    <p className='date'>{convertDate(comment.date)}</p>
                    <p className='comment-text'>{comment.message}</p>
                    <div className='point-container'>
                        <p className='point-total'>{comment.point} point</p>
                        <FontAwesomeIcon onClick={handleClickUp} className='arrow-btn arrow-up' icon={faArrowUp} 
                        style={{
                            backgroundColor: isActiveUp ? 'var(--green)' : '',
                            color: isActiveUp? 'white': ''
                        }}
                        />
                        <FontAwesomeIcon onClick={handleClickDown} className='arrow-btn arrow-down' 
                        style={{
                            backgroundColor: isActiveDown ? 'var(--red)' : '',
                            color: isActiveDown? 'white': ''
                        }}
                        icon={faArrowDown} />
                    </div>
                    <div className='reply-container'>
                        {comment.replies.map(reply => (
                            <div className='comment' key={reply.id}>
                                <div className='image-reply'>
                                    <img src={reply.avatar} />
                                </div>
                                <div className='comment-content'>
                                    <h4 className='name-user'>{reply.author}</h4>
                                    <p className='date'>{convertDate(comment.date)}</p>
                                    <p className='comment-text'>{reply.message}</p>
                                    <div className='point-container'>
                                        <p className='point-total'>{reply.point} point</p>
                                        <FontAwesomeIcon onClick={handleClickUp} 
                                        style={{
                                            backgroundColor: isActiveUp ? 'var(--green)' : '',
                                            color: isActiveUp? 'white': ''
                                        }}
                                        className='arrow-btn arrow-up' icon={faArrowUp} />
                                        <FontAwesomeIcon onClick={handleClickDown} 
                                        style={{
                                            backgroundColor: isActiveDown ? 'var(--red)' : '',
                                            color: isActiveDown? 'white': ''
                                        }}
                                        className='arrow-btn arrow-down' icon={faArrowDown} />
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>))}
        </div>
    )
}

export default Comment