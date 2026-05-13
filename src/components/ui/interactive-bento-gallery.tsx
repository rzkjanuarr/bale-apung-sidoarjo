"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react';

import { MenuItem } from '../../types';

// MediaItemType defines the structure of a media item
interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
    originalItem?: MenuItem;
}

const MediaItem = ({ item, className }: { item: MediaItemType, className?: string }) => {
    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className} object-cover w-full h-full`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
        />
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title: string
    description: string
    onAddToCart?: (item: MenuItem) => void
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, title, description, onAddToCart }) => {
    const [items, setItems] = useState(mediaItems);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        setItems(mediaItems);
    }, [mediaItems]);

    return (
        <div className="container mx-auto px-4 py-8 max-w-[95%]">
            <div className="mb-8 text-center">
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="mt-2 text-sm sm:text-base text-slate-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {description}
                </motion.p>
            </div>
            
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 auto-rows-[140px]"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 }
                    }
                }}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layoutId={`media-${item.id}`}
                        className={`relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-all ${item.span}`}
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: { type: "spring", stiffness: 350, damping: 25 }
                            }
                        }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={1}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={(e, info) => {
                            setIsDragging(false);
                            const moveDistance = info.offset.x + info.offset.y;
                            if (Math.abs(moveDistance) > 50) {
                                const newItems = [...items];
                                const draggedItem = newItems[index];
                                const targetIndex = moveDistance > 0 ?
                                    Math.min(index + 1, items.length - 1) :
                                    Math.max(index - 1, 0);
                                newItems.splice(index, 1);
                                newItems.splice(targetIndex, 0, draggedItem);
                                setItems(newItems);
                            }
                        }}
                    >
                        <MediaItem
                            item={item}
                            className="absolute inset-0"
                        />
                        
                        {/* Always Visible Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="relative p-3 flex flex-col items-start justify-end w-full">
                                <h3 className="text-white text-[10px] md:text-sm font-black line-clamp-1 uppercase tracking-tight w-full pr-8 drop-shadow-md">
                                    {item.title}
                                </h3>
                                <p className="text-secondary text-[9px] md:text-[11px] font-bold drop-shadow-md">
                                    {item.desc.split(' - ')[0]}
                                </p>
                            </div>
                        </div>

                        {/* Direct Add Button */}
                        {onAddToCart && item.originalItem && (
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: "#E8C872", color: "#B08736" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (!isDragging) onAddToCart(item.originalItem);
                                }}
                                className="absolute bottom-2 right-2 w-7 h-7 md:w-9 md:h-9 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border border-white/20 transition-colors z-20 pointer-events-auto"
                            >
                                <Plus size={18} strokeWidth={3} />
                            </motion.button>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default InteractiveBentoGallery
