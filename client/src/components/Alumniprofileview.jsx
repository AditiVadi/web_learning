import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ChevronLeft, ChevronRight,Heart } from 'lucide-react';

const AlumniProfile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const socialLinks = [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: faLinkedin },
        { platform: 'GitHub', url: 'https://github.com/username', icon: faGithub },
        { platform: 'Twitter', url: 'https://twitter.com/username', icon: faTwitter },
    ];

    const posts = [
        {
            id: 1,
            title: 'New Project Launch',
            description: 'We recently launched a new project aimed at improving AI-driven solutions for e-commerce businesses.',
            image: 'https://images.prismic.io/edapp-website/b147ce33-5e9e-4bd6-95b2-af699697a867_ai-best-practice-review-and-fact-check-content.jpg?auto=format,compress',
        },
        {
            id: 2,
            title: 'Webinar on Blockchain',
            description: 'Join us for an insightful webinar on how blockchain is revolutionizing industries.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fm=jpg&q=60&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop',
        },
        {
            id: 3,
            title: 'Hackathon Success',
            description: 'Our team recently won the Jugad AI Hackathon with an innovative diet recommendation system.',
            image: 'https://media1.thehungryjpeg.com/thumbs2/ori_3751703_dxw5wvjzkhsufye1cg58en3nqu1g3qz5ro5f1qlh_hackathon-development-minimal-infographic-banner-vector.jpg',
        }
    ];

    const totalPosts = posts.length;
    const extendedPosts = [...posts, ...posts.slice(0, 2)];

    const rotateCarousel = (direction) => {
        setCurrentIndex((prevIndex) => {
            let newIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;
            if (newIndex < 0) newIndex = totalPosts - 1;
            else if (newIndex >= totalPosts) newIndex = 0;
            return newIndex;
        });
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`;

        const transitionEndHandler = () => {
            if (currentIndex === totalPosts) {
                carousel.style.transition = 'none';
                setCurrentIndex(0);
            } else if (currentIndex === -1) {
                carousel.style.transition = 'none';
                setCurrentIndex(totalPosts - 1);
            }
        };

        carousel.addEventListener('transitionend', transitionEndHandler);
        return () => carousel.removeEventListener('transitionend', transitionEndHandler);
    }, [currentIndex, totalPosts]);

    useEffect(() => {
        const interval = setInterval(() => rotateCarousel('next'), 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col space-y-16">
            <div className="mt-24 flex justify-center flex-wrap">
                <ProfileCard socialLinks={socialLinks} />
                <AlumniDetails />
            </div>
            <AboutMe />
            <PostedWorks posts={extendedPosts} carouselRef={carouselRef} rotateCarousel={rotateCarousel} />
        </div>
    );
};

const ProfileCard = ({ socialLinks }) => (
    <div className="mx-5 h-150 alumni-profile bg-gradient-to-tr from-white via-gray-200 to-gray-200 max-w-md p-8 rounded-3xl transition-all duration-400 ease-in-out relative overflow-hidden">
        <div className="flex justify-center profile-image-container relative mb-10 z-10">
            <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Alumni Profile"
                className="profile-image w-48 h-48 rounded-full object-cover transition-all duration-400 hover:scale-105 hover:shadow-lg"
            />
            <div className="absolute top-[-15px] left-[-15px] right-[-15px] bottom-[-15px] border-3 border-dashed border-blue-400 rounded-full animate-spin-slow"></div>
        </div>
        <h2 className="text-grey-500 text-4xl font-bold uppercase text-center tracking-wider mb-3 relative z-10">
            Kavan Bakori
        </h2>
        <p style={{marginTop:'-10px'}} className='text-center'>WEB DEVELOPER</p>
        <p style={{marginTop:'20px'}} className='text-center'>Information Technology</p>
        <p className="text-gray-700 text-center text-lg mb-3 relative z-10">ID: 21dit002</p>
        <p className="text-center text-lg mb-3 relative z-10">
            Email: <a href="mailto:kavan.bakori@example.com" className="text-teal-500 hover:underline">kavan.bakori@example.com</a>
        </p>
        <p className="text-center text-lg relative z-10">
            Portfolio: <a href="https://example.com/portfolio" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">View Portfolio</a>
        </p>
        <div className="social-links flex justify-center gap-6 mt-6 relative z-10">
            {socialLinks.map(link => (
                <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-gray-600 text-white rounded-full transition-all duration-400 hover:shadow-lg hover:scale-105"
                >
                    <FontAwesomeIcon icon={link.icon} />
                </a>
            ))}
        </div>
        <div style={{display:'flex',columnGap:'10px'}}>
        <button style={{border:'2px solid black'}} className="mt-5 w-full font-bold text-lg text-black bg-transperent py-3 px-6 rounded-lg hover:bg-gray-400  transition-colors duration-300">
            Following
        </button>
        <button className="mt-5 w-full font-bold text-lg text-white bg-black py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
            Message
        </button>
        </div>
    </div>
);

const AlumniDetails = () => (
    <div className="px-8 flex-1 rounded-2xl transition-all duration-300 ease-in-out overflow-hidden relative">
        <h2 className="text-4xl font-extrabold text-grey-600 mb-10 text-center uppercase tracking-wider relative">
            Alumni Details
            <span className="block absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500 rounded-full"></span>
        </h2>
        <div className="mb-8">
            <p className="text-2xl font-bold text-white bg-gradient-to-r from-teal-500 to-gray-600 p-3 rounded-md text-center">
                "Stay curious and keep learning!"
            </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center pb-8">
            {[
                { title: "Passout Year", content: "2022" },
                { title: "Current Position", content: "Software Engineer at Tech Innovations Inc." },
                { title: "Package Range", content: "5-6 LPA" },
                { title: "Areas of Interest", content: "Machine Learning, Cloud Computing, Full Stack Development" },
                { title: "Famous Certifications", content: "Certified AWS Solutions Architect, Google Data Analytics Certificate" },
                { title: "Technology Expertise", content: "ReactJS, Node.js, Python, Docker" }
            ].map((item, index) => (
                <div key={index} style={{height:'200px',width:'300px'}} className="h-50 w-75 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg border border-gray-200 backdrop-blur-sm transition-transform duration-300 ease-in-out hover:translate-y-[-5px] ">
                    <strong className="text-gray-800 font-bold text-lg mb-4 block border-b-2 border-gray-200 pb-2 relative">
                        {item.title}
                        <span className="absolute bottom-[-2px] left-0 w-12 h-1 bg-teal-500"></span>
                    </strong>
                    <p className="text-gray-700 text-base leading-relaxed">{item.content}</p>
                </div>
            ))}
        </div>
    </div>
);

const AboutMe = () => (
    <div className="flex justify-center items-center py-12 w-full">
        <div className="flex flex-col md:flex-row items-stretch max-w-6xl w-full bg-white rounded-lg overflow-hidden transition-transform transform">
            <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Your Name"
                className="w-full md:w-2/5 h-64 md:h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-semibold mb-6 relative">
                    About Me
                </h1>
                <p className="text-lg leading-relaxed text-black relative pl-6 mb-6">
                    <span className="absolute left-0 text-teal-500">•</span>
                    Hello! I'm [Your Name], a passionate [Your Profession] with expertise in
                    [Your Skillset]. I love creating innovative solutions that make a difference.
                    My journey in [Your Industry] has been filled with learning, growth, and
                    exciting challenges that have shaped me into the professional I am today.
                </p>
                <p className="text-lg leading-relaxed text-black relative pl-6">
                    <span className="absolute left-0 text-teal-500">•</span>
                    When I'm not working, I enjoy [Your Hobbies or Interests]. I believe in
                    continuous learning and always strive to improve myself both personally
                    and professionally. Let's connect and create something amazing together!
                </p>
            </div>
        </div>
    </div>
);


const PostedWorks = ({ posts, carouselRef, rotateCarousel }) => {
    const [likedPosts, setLikedPosts] = useState({});

    const toggleLike = (postId) => {
        setLikedPosts((prevLikedPosts) => ({
            ...prevLikedPosts,
            [postId]: {
                isLiked: !prevLikedPosts[postId]?.isLiked,
                count: (prevLikedPosts[postId]?.count || 0) + (prevLikedPosts[postId]?.isLiked ? -1 : 1)
            }
        }));
    };

    return (
        <div className="alumni-posts bg-gray-100 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-center mb-8 relative">
                Posted Works & Updates
                <span className="absolute w-16 h-1 bg-teal-500 bottom-0 top-12 left-1/2 transform -translate-x-1/2"></span>
            </h3>
            <div className="relative px-12">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-teal-500 transition z-10"
                    onClick={() => rotateCarousel('prev')}
                >
                    <ChevronLeft size={20} />
                </button>
                <div className="overflow-hidden">
                    <div className="flex transition-transform ease-in-out duration-500" ref={carouselRef}>
                        {posts.map((post, index) => (
                            <div key={`${post.id}-${index}`} className="flex-none w-1/3 p-4">
                                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-40 object-cover rounded-t-lg"
                                    />
                                    <div className="p-6 flex flex-col justify-between h-[calc(100%-10rem)]">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-3">{post.title}</h4>
                                            <p className="text-gray-700">{post.description}</p>
                                        </div>
                                        <div className="mt-7 flex justify-end">
                                            {/* Comment button removed as per original code */}
                                        </div>
                                    </div>
                                    {/* Updated like button with count */}
                                    <div className="absolute left-3 bottom-3 flex items-center">
                                        <button
                                            className={`p-2 rounded-full transition-colors duration-300 ${
                                                likedPosts[post.id]?.isLiked 
                                                    ? 'bg-red-500 text-white' 
                                                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                            }`}
                                            onClick={() => toggleLike(post.id)}
                                            aria-label={likedPosts[post.id]?.isLiked ? "Unlike post" : "Like post"}
                                        >
                                            <Heart 
                                                size={20} 
                                                className={likedPosts[post.id]?.isLiked ? 'fill-current' : ''}
                                            />
                                        </button>
                                        <span className="ml-2 text-sm font-medium">
                                            {likedPosts[post.id]?.count || 0}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-teal-500 transition z-10"
                    onClick={() => rotateCarousel('next')}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};
export default AlumniProfile;