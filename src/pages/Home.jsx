import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Button, Container, PostCard } from '../components'
import bannerImage from '../assets/bg.jpg'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div
                className="relative flex flex-col items-center justify-center min-h-[65vh] text-center rounded-lg shadow-md bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

                <h1 className="relative text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                    Welcome to Chronique
                </h1>
                <h2 className="text-xl relative font-medium text-white mt-1">
                    Chronique a blog app project that leverages <a href="https://appwrite.io" target="_blank"><span className='font-bold'>Appwrite</span></a> for backend services.
                </h2>

                <Button

                    type="button"
                    className="relative font-medium mt-6 py-4 px-9 hover:bg-slate-300 rounded-none"
                    bgColor="bg-white"
                    textColor="text-black"
                    onClick={() => navigate("/signup")}
                >
                    Get Started
                </Button>

            </div>
        );
    }

    return (
        // <div className="py-8">
        //     <Container>
        //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        //             {posts.map((post) => (
        //                 <div key={post.$id} className="bg-white shadow-lg hover:shadow-2xl transition">
        //                     <PostCard {...post} />
        //                 </div>
        //             ))}
        //         </div>
        //     </Container>
        // </div>
        <div
            className="relative flex flex-col items-center justify-center min-h-[65vh] text-center rounded-lg shadow-md bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

            <h1 className="relative text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                Welcome to Chronique
            </h1>
            <h2 className="text-xl relative font-medium text-white mt-1">
                Chronique a blog app project that leverages <a href="https://appwrite.io" target="_blank"><span className='font-bold'>Appwrite</span></a> for backend services.
            </h2>

            <Button

                type="button"
                className="relative font-medium mt-6 py-3 px-9 hover:bg-slate-300 rounded-none"
                bgColor="bg-white"
                textColor="text-black"
                onClick={() => navigate("/all-posts")}
            >
                All Posts
            </Button>

        </div>
    );

}

export default Home