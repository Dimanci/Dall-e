import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) return data.map(post => <Card key={post.id} {...post} />)
    return <h2 className='mt-5 font-bold text-[#6449ff] text-x1 uppercase'>{title}</h2>
}

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState(null)
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            try {
                const response = await fetch('http://localhost:8080/api/v1/post')
                if (response.ok) {
                    const result = await response.json()

                    setAllPosts(result.data.reverse())
                }
            } catch (error) {
                alert(error)
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [])

    const handleSearchChange = () => {
        setSearchText(e.target.value)
        setTimeout(() => {

        }, 500)
    }
    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#222328] text-[32px]'>
                    The Gallery
                    <p className='mt-2 text-[#777e75] text-[16px] max-w[500px]'>
                        Enjoy this creative collection of DALL-E generated mindblowing images
                    </p>
                </h1>
            </div>
            <div className='mt-16'>
                <FormField />
            </div>
            <div className='mt-10'>
                {loading && <div className='flex justify-center items-center'>
                    <Loader />
                </div>}
                {searchText && <h2 className='font-medium text-[#777e75]'>
                    Showing results for <span className='text-[#222328]'>{searchText}</span>
                </h2>}
                <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                    {searchText ? <RenderCards data={allPosts} title='No search results found' /> : <RenderCards data={allPosts} title='No posts found' />}
                </div>
            </div>
        </section>
    )
}

export default Home