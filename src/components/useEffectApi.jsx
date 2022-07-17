import React, { useEffect, useState } from 'react'

import './useEffectApi.css'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading'
const UseEffectApi = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const noOfUsers = 5;
    const url = 'https://randomuser.me/api';

    const getContactDetails = async () => {
        let pageNo = Math.ceil(users.length / noOfUsers) + 1;
        const queryParam = "?page=" + pageNo + "&results=" + noOfUsers;
        const finalurl = url + queryParam
        try {

            const res = await fetch(finalurl)
            setLoading(false);

            const data = await res.json();
            const results = data.results;
            const mergeData = [...users, ...results]
            setUsers(mergeData);


        }
        catch (err) {
            setLoading(false);
            console.log("THis is the error" + err);

        }
    }
    const fetchMoreData = () => {
        getContactDetails();
    }
    useEffect(() => {
        getContactDetails();

    }, [])

    return (


        <div>
            <h2 className='text-center mt-5'>List of Contacts</h2>

            <div className="container-fluid">
                <InfiniteScroll
                    dataLength={users.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<Loading />}
                >

                    {
                        users.map((results) => {
                            const { name, picture, email, cell, id } = results;
                            return (

                                <Row key={cell} className='mt-5  data' >

                                    <Col lg={2} md={2} sm={2} >
                                        <div className="image"> <img src={picture.medium} alt="image" /> </div>
                                    </Col>
                                    <Col lg={10} md={10} sm={10} >
                                        <Row>


                                            <Col lg={4} md={4} sm={4} className="info d-flex flex-column mt-4">
                                                <span className="articles">Name :</span> <span className="span">{name.first} {name.last}</span> </Col>
                                            <Col lg={4} md={4} sm={4} className="info d-flex flex-column mt-4">
                                                <span className="articles">Number :</span> <span className="span">{cell}</span> </Col>
                                            <Col lg={4} md={4} sm={4} className="info d-flex flex-column mt-4">
                                                <span className="articles">emial :</span> <span className="span">{email}</span> </Col>
                                        </Row>




                                    </Col>
                                </Row>


                            )
                        })
                    }
                </InfiniteScroll>


            </div >
        </div >

    )

}

export default UseEffectApi