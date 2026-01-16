//seen


import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center cursor-none">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Details not found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-white/60 hover:text-white transition-colors cursor-none"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen text-white selection:bg-white/20 cursor-none">

            <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 md:pb-24 pt-6 md:pt-18">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors group cursor-none"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
                        <div>
                            <span className="text-sm font-mono text-white/60 mb-4 block">
                                {project.category} • {project.period}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="flex gap-4">
                                
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors font-medium cursor-none">
                                    View Live <ExternalLink size={18} />
                                </a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors font-medium cursor-none">
                                    Source Code <FaGithub size={18} />
                                </a>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* detailDiscription */}
                    {project.detailDescription && (
                        <div className="mb-16">
                            <h3 className="text-2xl font-display font-bold mb-6">About This Project</h3>
                            <p className="text-lg text-white/70 font-light leading-relaxed">
                                {project.detailDescription}
                            </p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-display font-bold mb-8">Key Features</h3>
                            <ul className="space-y-6">
                                {project.points.map((point, index) => (
                                    <li key={index} className="flex gap-4 text-white/80 font-light leading-relaxed">
                                        <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-white/40 flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-display font-bold mb-8">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;
